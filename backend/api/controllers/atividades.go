package controllers

import(
	"database/sql"
	"net/http"
	"backend/database"
	"github.com/gin-gonic/gin"
	"strconv"
)

func GetAtividades(db *sql.DB, c *gin.Context){
	sliceAtividades, err := database.Atividades(db)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error":"erro ao buscar atividades",
		})
		return
	}
	c.IndentedJSON(http.StatusOK, sliceAtividades)
}

func GetAtividadesPorTurma(db *sql.DB, c *gin.Context){
	turmaStr := c.Param("idturma")

	turma, err := strconv.Atoi(turmaStr)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error":"Turma invalida"})
		return
	}

	sliceAtividades, err := database.AtividadesTurma(db, turma)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error":"erro ao buscar atividades por turma",
		})
		return
	}

	c.IndentedJSON(http.StatusOK, sliceAtividades)
}

func PostAtividades(db *sql.DB, c *gin.Context){
	database.AdicionarAtividade(db, c)
}
func RemoveAtividades(db *sql.DB, c *gin.Context){
	database.RemoverAtividade(db, c)
}
