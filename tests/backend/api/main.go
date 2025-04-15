package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type aluno struct {
	ID				string `json: "id"`
	Nome 			string `json: "nome"`
	DataNasc	string `json: "dataNasc"`
}

var alunos = []aluno {
	{ID: "1", Nome: "Gustavo Versolatto", DataNasc: "06/05/2006"},
	{ID: "2", Nome: "Gustavo Bomfim", DataNasc: "07/10/2005"},
	{ID: "3", Nome: "Nicole Macacaretti", DataNasc: "06/05/2006"},
	{ID: "4", Nome: "Nicholas Carmona", DataNasc: "13/12/2006"},
	{ID: "5", Nome: "Caio Onha", DataNasc: "04/05/2006"},
}

func main(){
	router := gin.Default()
	router.GET("/alunos", getAlunos)
	router.POST("/alunos", postAlunos)
	router.Run("localhost:8080")
}

func getAlunos(c *gin.Context){
	c.IndentedJSON(http.StatusOK, alunos)
}

func postAlunos(c *gin.Context){
	var newAluno aluno

	if err := c.BindJSON(&newAluno); err != nil{
		return
	}

	alunos = append(alunos, newAluno)
	c.IndentedJSON(http.StatusCreated, newAluno)
}