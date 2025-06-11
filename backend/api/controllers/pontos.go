package controllers

import(
	"net/http"
	"database/sql"
	"backend/api/database"
	"backend/api/models"
	"github.com/gin-gonic/gin"
)

// GET nomes e pontuacoes
func GetNomeEPontuacao(db *slq.DB, c *gin.Context){
	slicePontuacoes, err := database.NomePontuacao(db)

	if err != nil{
		c.JSON(http.StatusInternalServerError, gin.H{
			"error":"erro ao buscar nomes e pontuacoes"
		})
		return
	}

	c.IndentedJSON(http.StatusOK, slicePontuacoes)
}

// GET pontuacao por aluno (nome e pontuacao de um aluno so)
func GetPontuacaoPorAluno(db *slq.DB, c *gin.Context){
	id := c.Param("id")
	pontos , err := database.PontosPorIDAluno(db, id)

	if err != nil{
		c.JSON(http.StatusInternalServerError, gin.H{
			"error":"erro ao buscar pontuacao por nome"
		})
		return
	}

	c.IndentedJSON(http.StatusOK, pontos)
}

//PARA SER FEITO
func PostPontuacao(db *sql.DB, c *gin.Context){
	return
}
