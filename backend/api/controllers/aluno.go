package controllers

import(
	"net/http"
	"backend/api/models"
	"github.com/gin-gonic/gin"
)

var alunos = []models.Aluno {
	{ID: "1", Nome: "Gustavo Versolatto", DataNasc: "06/05/2006"},
	{ID: "2", Nome: "Gustavo Bomfim", DataNasc: "07/10/2005"},
	{ID: "3", Nome: "Nicole Macacaretti", DataNasc: "06/05/2006"},
	{ID: "4", Nome: "Nicholas Carmona", DataNasc: "13/12/2006"},
	{ID: "5", Nome: "Caio Onha", DataNasc: "04/05/2006"},
}

func GetAlunos(c *gin.Context){
	c.IndentedJSON(http.StatusOK, alunos)
}

func PostAlunos(c *gin.Context){
	var newAluno models.Aluno

	if err := c.BindJSON(&newAluno); err != nil{
		return
	}

	alunos = append(alunos, newAluno)
	c.IndentedJSON(http.StatusCreated, newAluno)
}