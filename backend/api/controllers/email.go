package controllers

import (
	"backend/services"
	"database/sql"
	"github.com/gin-gonic/gin"
	_ "github.com/joho/godotenv/autoload"
	"net/http"
	"sync"
)

var (
	tokens      = make(map[string]string)
	verificados = make(map[string]bool)
	mu          sync.Mutex
)

func EnviaEmailDeValidacao(c *gin.Context) {
	type Requisicao struct {
		Email string `json:"email"`
		Nome  string `json:"nome"`
	}
	var req Requisicao
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"erro": "JSON inválido"})
		return
	}
	token := services.GerarToken()

	mu.Lock()
	tokens[token] = req.Email
	mu.Unlock()

	err := services.EnviarEmailConfirmacao(req.Email, token)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"erro": "Erro ao enviar email"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"mensagem": "Email de confirmação enviado"})
}

func ValidaUsuario(db *sql.DB, c *gin.Context) {
	token := c.Query("token")

	mu.Lock()
	email, existe := tokens[token]
	if existe {
		verificados[email] = true
		senhaGerada := services.GerarSenhaAleatoria()
		//----------------------- SALVAR NO BANCO AQUI (INSERT)-----------------------
		stmt, err := db.Prepare("UPDATE users SET senha = ? WHERE email = ?")
		if err != nil {
			mu.Unlock()
			c.JSON(http.StatusInternalServerError, gin.H{"erro": "Erro ao preparar consulta SQL"})
			return
		}
		defer stmt.Close()

		_, err = stmt.Exec(senhaGerada, email)
		if err != nil {
			mu.Unlock()
			c.JSON(http.StatusInternalServerError, gin.H{"erro": "Erro ao salvar usuário no banco"})
			return
		}
		// ---------------------------------------------------
		services.EnviarSenha(email, senhaGerada)
		delete(tokens, token)
	}
	mu.Unlock()

	if !existe {
		c.JSON(http.StatusBadRequest, gin.H{"erro": "Token inválido ou expirado"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"mensagem": "Email confirmado com sucesso!", "email": email})

}
