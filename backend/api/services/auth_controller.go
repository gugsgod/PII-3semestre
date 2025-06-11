package services

import (
	"database/sql"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"os"
	"strings"
	"time"

	_ "github.com/go-sql-driver/mysql"
	_ "github.com/joho/godotenv/autoload"
)

var db *sql.DB
var secretKey = []byte(os.Getenv("SECRETKEY"))

func init() {
	var err error
	db, err = sql.Open("mysql", "pigas:123321@tcp(34.39.135.86)/pii")
	if err != nil {
		fmt.Println("Erro ao conectar ao banco de dados:", err)
	}
	fmt.Println("up and running")
	fmt.Println("Secret key carregada: ", string(secretKey))
}

func criarToken(role, nome, email string) string {
	claims := jwt.MapClaims{
		"sub":  email,
		"exp":  time.Now().Add(time.Hour).Unix(),
		"iat":  time.Now().Unix(),
		"role": role,
		"nome": nome,
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

func middlewareAutenticacao() gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		tokenString := strings.TrimPrefix(authHeader, "Bearer ")

		claims, err := validarToken(tokenString)
		if err != nil {
			c.JSON(401, gin.H{"error": "Token inválido ou não autorizado"})
			c.Abort()
			return
		}

		c.Set("claims", claims)
		c.Next()
	}
}

type Credenciais struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func loginHandler(c *gin.Context) {
	var cred Credenciais
	if err := c.ShouldBindJSON(&cred); err != nil {
		c.JSON(400, gin.H{"error": "JSON inválido"})
		return
	}

	var role, nome string
	err := db.QueryRow("SELECT role, nome FROM propriedades_id WHERE email=? AND password=?", cred.Email, cred.Password).Scan(&role, &nome)
	if err != nil {
		c.JSON(401, gin.H{"error": "Credenciais inválidas"})
		return
	}

	token := criarToken(role, nome, cred.Email)
	if token == "" {
		c.JSON(500, gin.H{"error": "Erro ao criar token"})
		return
	}

	c.JSON(200, gin.H{"token": token, "nome": nome})
}

func rotaComPermissao(permissao string) gin.HandlerFunc {
	return func(c *gin.Context) {
		claims, _ := c.Get("claims")
		mapClaims := (*claims.(*jwt.MapClaims))

		if mapClaims["role"] != permissao {
			c.JSON(403, gin.H{"error": "Acesso negado"})
			return
		}

		c.JSON(200, gin.H{"mensagem": "Acesso autorizado"})
	}
}

func main() {
	r := gin.Default()

	r.POST("/jwtlogin", loginHandler)

	r.GET("/jwtcoordenacao", middlewareAutenticacao(), rotaComPermissao("admin"))
	r.GET("/jwtprofessor", middlewareAutenticacao(), rotaComPermissao("professor"))
	r.GET("/jwtaluno", middlewareAutenticacao(), rotaComPermissao("aluno"))

}
