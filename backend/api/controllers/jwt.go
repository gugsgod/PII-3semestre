package controllers

import (
	"backend/api/models"
	"backend/api/services"
	"database/sql"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"github.com/golang-jwt/jwt/v5"
	_ "github.com/joho/godotenv/autoload"
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

	var role, nome string
	err := db.QueryRow("SELECT role, nome FROM propriedades_id WHERE email=? AND password=?", cred.Email, cred.Password).Scan(&role, &nome)
	if err != nil {
		c.JSON(401, gin.H{"error": "Credenciais inválidas"})
		return
	}

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
