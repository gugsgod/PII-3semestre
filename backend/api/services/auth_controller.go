ypackage main

import (
	"fmt"
	"github.com/golang-jwt/jwt/v5"
	"os"
	"time"
	"strings"
	"net/http"

	_ "github.com/joho/godotenv/autoload"
)

var secretKey = []byte(os.Getenv("SECRETKEY"))

func criarToken(username string) (string, error) {
	claims := jwt.MapClaims{
		"sub": username,
		"exp": time.Now().Add(time.Hour).Unix(),
		"iat": time.Now().Unix(),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(secretKey)
	if err != nil {
		return "", err
	}

	return tokenString, nil
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

		// Aqui você pode até usar o valor dos claims, como o username
		fmt.Println("Usuário autenticado:", (*claims)["sub"])

		next(w, r)
	}
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	username := r.URL.Query().Get("username")
	if username == "" {
		http.Error(w, "Parâmetro 'username' é obrigatório", http.StatusBadRequest)
		return
	}

	token, err := criarToken(username)
	if err != nil {
		http.Error(w, "Erro ao gerar token", http.StatusInternalServerError)
		return
	}

	fmt.Fprintf(w, "Token JWT: %s", token)
}

func main() {
	http.HandleFunc("/login", loginHandler)
	// Rotas de ficticias para exemplo
	http.HandleFunc("/protegida", middlewareAutenticacao(rotaProtegida))
	http.HandleFunc("/adicionaraluno", middlewareAutenticacao(adicionarAlunoHandler))
}

