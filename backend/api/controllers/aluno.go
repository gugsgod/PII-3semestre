package controllers

import(
	"database/sql"
	"net/http"
	"backend/database"
	"github.com/gin-gonic/gin"
	"strconv"
)

// GET todos os alunos
func GetAlunos(db *sql.DB, c *gin.Context){
	sliceAlunos, err := database.Alunos(db) 

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error":"erro ao pegar os dados alunos",
		})
		return
	}

	c.IndentedJSON(http.StatusOK, sliceAlunos)
}

// GET alunos por turma
func GetAlunosTurma(db *sql.DB, c *gin.Context){
	param := c.Param("turma")
	
	// converte string em int
	turma , err := strconv.Atoi(param)
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
        return
    }
	
	//ativa func da database
	sliceNomes, err := database.AlunosTurma(db, turma)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error":"erro ao pegar os dados alunos de uma turma especifica",
		})
		return
	}

	c.IndentedJSON(http.StatusOK, sliceNomes)
}

// TEM QUE SER FINALIZADO
// Nao vai ser muito utilizado
//func PostAlunos(c *gin.Context){
//	var newAluno models.Aluno
//
//	if err := c.BindJSON(&newAluno); err != nil{
//		return
//	}
//
//	alunos = append(alunos, newAluno)
//	c.IndentedJSON(http.StatusCreated, newAluno)
//}
