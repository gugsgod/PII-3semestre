package main

import (
	"fmt"
	"time"
	"github.com/golang-jwt/jwt/v5"
	"os"

	_ "github.com/joho/godotenv/autoload"
)

var secretKey = []byte(os.Getenv("SECRETKEY"))

func criarToken(username string) {
	claims := jwt.MapClaims{
		"sub": username,
		"exp": time.Now().Add(time.Hour).Unix(),
		"iat": time.Now().Unix(),               
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	tokenString, err := token.SignedString(secretKey)
	if err != nil {
		fmt.Println("Erro ao assinar o token:", err)
		return
	}

	fmt.Println("Chave secreta: ", secretKey)
	fmt.Println("Estrutura das claims: ", claims)
	fmt.Println("Token JWT gerado:", tokenString)
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


func main() {
	criarToken("bosta")
}
