package main

import (
	"crypto/rand"
	"encoding/hex"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"net/smtp"
	"os"
	"sync"

	_ "github.com/joho/godotenv/autoload"
)

var (
	tokens      = make(map[string]string)
	verificados = make(map[string]bool)
	mu          sync.Mutex
)

func gerarToken() string {
	bytes := make([]byte, 16)
	rand.Read(bytes)
	return hex.EncodeToString(bytes)
}

func enviarEmailConfirmacao(email, token string) error {
	smtpHost := "smtp.gmail.com"
	smtpPort := "587"
	remetente := "nihplisetsky@gmail.com"
	senha := os.Getenv("SENHA")

	auth := smtp.PlainAuth("", remetente, senha, smtpHost)

	link := fmt.Sprintf("http://localhost:8080/confirmar?token=%s", token)

	msg := []byte("To: " + email + "\r\n" +
		"Subject: Confirme seu email\r\n\r\n" +
		"Olá! Clique no link para confirmar seu email:\n" + link + "\n")

	return smtp.SendMail(smtpHost+":"+smtpPort, auth, remetente, []string{email}, msg)
}

func gerarSenhaAleatoria() string {
	const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"
	bytes := make([]byte, 8)
	rand.Read(bytes)
	for i, b := range bytes {
		bytes[i] = caracteres[b%byte(len(caracteres))]
	}
	return string(bytes)
}

func enviarSenha(email, senha string) error {
	smtpHost := "smtp.gmail.com"
	smtpPort := "587"
	remetente := "nihplisetsky@gmail.com"
	auth := smtp.PlainAuth("", remetente, os.Getenv("SENHA"), smtpHost)

	msg := []byte("To: " + email + "\r\n" +
		"Subject: Senha para login\r\n\r\n" +
		"Olá!\n\nEssa é sua senha para acessar a plataforma: " + senha + "\n")

	return smtp.SendMail(smtpHost+":"+smtpPort, auth, remetente, []string{email}, msg)
}

func main() {
	router := gin.Default()

	router.POST("/registrar", func(c *gin.Context) {
		type Requisicao struct {
			Email string `json:"email"`
		}
		var req Requisicao
		if err := c.BindJSON(&req); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"erro": "JSON inválido"})
			return
		}
		token := gerarToken()

		mu.Lock()
		tokens[token] = req.Email
		mu.Unlock()

		err := enviarEmailConfirmacao(req.Email, token)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"erro": "Erro ao enviar email"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"mensagem": "Email de confirmação enviado"})
	})

	router.GET("/confirmar", func(c *gin.Context) {
		token := c.Query("token")

		mu.Lock()
		email, existe := tokens[token]
		if existe {
			verificados[email] = true
			senhaGerada := gerarSenhaAleatoria()
			//----------------------- SALVAR NO BANCO AQUI-----------------------

			// ---------------------------------------------------
			enviarSenha(email, senhaGerada)
			delete(tokens, token)
		}
		mu.Unlock()

		if !existe {
			c.JSON(http.StatusBadRequest, gin.H{"erro": "Token inválido ou expirado"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"mensagem": "Email confirmado com sucesso!", "email": email})
	})

	router.Run(":8080")
}
