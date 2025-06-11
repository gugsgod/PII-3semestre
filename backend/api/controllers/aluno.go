package controllers

import(
	"database/sql"
	"net/http"
	"backend/api/models"
	"backend/api/database"
	"github.com/gin-gonic/gin"
)

// GET todos os alunos
func GetAlunos(db *sql.DB, c *gin.Context){
	sliceAlunos, err = database.Alunos(db) 

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error":"erro ao pegar os dados alunos"
		})
		return
	}

	c.IndentedJSON(http.StatusOK, alunos)
}

// GET alunos por turma
func GetAlunosTurma(db *slq.DB, c *gin.Context){
	turma := c.Param("turma")
	sliceNomes, err := database.AlunosTurma(db, turma)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error":"erro ao pegar os dados alunos de uma turma especifica"
		})
		return
	}

	c.IndentedJSON(http.StatusOK, sliceNomes)
}

// TEM QUE SER FINALIZADO
// Nao vai ser muito utilizado
func PostAlunos(c *gin.Context){
	var newAluno models.Aluno

	if err := c.BindJSON(&newAluno); err != nil{
		return
	}

	alunos = append(alunos, newAluno)
	c.IndentedJSON(http.StatusCreated, newAluno)
}
