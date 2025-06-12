package controllers

import (
	"backend/models"
	"backend/services"
	"database/sql"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"github.com/golang-jwt/jwt/v5"
	_ "github.com/joho/godotenv/autoload"
	"golang.org/x/crypto/bcrypt"
	"strings"
)

func MiddlewareAutenticacao() gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		tokenString := strings.TrimPrefix(authHeader, "Bearer ")

		claims, err := services.ValidarToken(tokenString)
		if err != nil {
			c.JSON(401, gin.H{"error": "Token inválido ou não autorizado"})
			c.Abort()
			return
		}

		c.Set("claims", claims)
		c.Next()
	}
}

func LoginHandler(db *sql.DB, c *gin.Context) {
	var cred models.Credenciais
	if err := c.ShouldBindJSON(&cred); err != nil {
		c.JSON(400, gin.H{"error": "JSON inválido"})
		return
	}

	var role, nome, senhaDoBanco string
	senha := db.QueryRow("SELECT senha from users WHERE email=?", cred.Email).Scan(&senhaDoBanco)
	if senha != nil {
		c.JSON(401, gin.H{"error": "Usuario nao tem senha"})
		return
	}
	comp := bcrypt.CompareHashAndPassword([]byte(senhaDoBanco), []byte(cred.Password))
	if comp != nil {
		c.JSON(401, gin.H{"error": "Credenciais inválidas"})
		return
	}

	_ = db.QueryRow("SELECT role, nome FROM users WHERE email=?", cred.Email).Scan(&role, &nome)

	token := services.CriarToken(role, nome, cred.Email)
	if token == "" {
		c.JSON(500, gin.H{"error": "Erro ao criar token"})
		return
	}

	c.JSON(200, gin.H{"token": token, "nome": nome})
}

func RotaComPermissao(permissao string) gin.HandlerFunc {
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
