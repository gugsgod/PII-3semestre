package services

import (
	"crypto/rand"
	"encoding/hex"
	"fmt"
	_ "github.com/joho/godotenv/autoload"
	"net/smtp"
	"os"
)

func GerarToken() string {
	bytes := make([]byte, 16)
	rand.Read(bytes)
	return hex.EncodeToString(bytes)
}

func EnviarEmailConfirmacao(email, token string) error {
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

func GerarSenhaAleatoria() string {
	const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"
	bytes := make([]byte, 8)
	rand.Read(bytes)
	for i, b := range bytes {
		bytes[i] = caracteres[b%byte(len(caracteres))]
	}
	return string(bytes)
}

func EnviarSenha(email, senha string) error {
	smtpHost := "smtp.gmail.com"
	smtpPort := "587"
	remetente := "nihplisetsky@gmail.com"
	auth := smtp.PlainAuth("", remetente, os.Getenv("SENHA"), smtpHost)

	msg := []byte("To: " + email + "\r\n" +
		"Subject: Senha para login\r\n\r\n" +
		"Olá!\n\nEssa é sua senha para acessar a plataforma: " + senha + "\n")

	return smtp.SendMail(smtpHost+":"+smtpPort, auth, remetente, []string{email}, msg)
}
