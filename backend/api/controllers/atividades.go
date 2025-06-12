package controllers

import(
	"database/sql"
	"net/http"
	"backend/database"
	"github.com/gin-gonic/gin"
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
	turma := c.Param("turma")

	sliceAtividades, err := database.AtividadesTurma(db, turma)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error":"erro ao buscar atividades por turma",
		})
		return
	}

	c.IndentedJSON(http.StatusOK, sliceAtividades)
}
