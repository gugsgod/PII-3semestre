package main

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"github.com/golang-jwt/jwt/v5"
	"net/http"
	"os"
	"strings"
	"time"

	_ "github.com/go-sql-driver/mysql"
	_ "github.com/joho/godotenv/autoload"
)

var db *sql.DB

func init() {
	var err error
	db, err = sql.Open("mysql", "pigas:123321@tcp(34.39.135.86)/pii")
	if err != nil {
		fmt.Println("Erro ao conectar ao banco de dados:", err)
	}
	fmt.Println("up and running")
}

var secretKey = []byte(os.Getenv("SECRETKEY"))

func criarToken(role string) string {
	claims := jwt.MapClaims{
		"exp":  time.Now().Add(time.Hour).Unix(),
		"iat":  time.Now().Unix(),
		"role": role,
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(secretKey)
	if err != nil {
		return ""
	}

	return tokenString
}

func validarToken(tokenString string) (*jwt.MapClaims, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("algoritmo de assinatura inválido: %v", token.Header["alg"])
		}
		return secretKey, nil
	})

	if err != nil {
		return nil, fmt.Errorf("token inválido: %w", err)
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return &claims, nil
	} else {
		return nil, fmt.Errorf("token não é válido ou claims malformadas")
	}
}

func middlewareAutenticacao(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		authHeader := r.Header.Get("Authorization")
		tokenString := strings.TrimPrefix(authHeader, "Bearer ")

		claims, err := validarToken(tokenString)
		if err != nil {
			http.Error(w, "Token inválido ou não autorizado", http.StatusUnauthorized)
			return
		}

		ctx := context.WithValue(r.Context(), "claims", claims)
		r = r.WithContext(ctx)

		next(w, r)
	}
}

type Credenciais struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	var cred Credenciais
	err := json.NewDecoder(r.Body).Decode(&cred)
	if err != nil {
		http.Error(w, "JSON inválido", http.StatusBadRequest)
		return
	}

	var role string
	err = db.QueryRow("SELECT role FROM users WHERE email=$1 AND password=$2", cred.Email, cred.Password).Scan(&role)
	if err != nil {
		http.Error(w, "Credenciais inválidas", http.StatusUnauthorized)
		return
	}

	token := criarToken(role)
	if token == "" {
		http.Error(w, "Erro ao criar token", http.StatusInternalServerError)
		return
	}

	fmt.Fprintln(w, token)
}
func rotaProtegida(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Acesso autorizado: Usuario autenticado")
}

func rotaAdmin(w http.ResponseWriter, r *http.Request) {
	claims := r.Context().Value("claims").(*jwt.MapClaims)

	if (*claims)["role"] != "admin" {
		http.Error(w, "Acesso negado, apenas administracao", http.StatusForbidden)
		return
	}

	fmt.Fprintln(w, "Bem-vindo")
}

func main() {
	http.HandleFunc("/login", loginHandler)
	// Rotas ficticias para exemplo
	http.HandleFunc("/protegida", middlewareAutenticacao(rotaProtegida))
	http.HandleFunc("/admin", middlewareAutenticacao(rotaAdmin))
	http.ListenAndServe(":8080", nil)
}
