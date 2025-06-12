package controllers

import(
	"net/http"
	"database/sql"
	"backend/database"
	"github.com/gin-gonic/gin"
	"strconv"
)

// GET nomes e pontuacoes
func GetNomeEPontuacao(db *sql.DB, c *gin.Context){
	slicePontuacoes, err := database.NomePontuacao(db)

	if err != nil{
		c.JSON(http.StatusInternalServerError, gin.H{
			"error":"erro ao buscar nomes e pontuacoes",
		})
		return
	}

	c.IndentedJSON(http.StatusOK, slicePontuacoes)
}

// GET pontuacao por aluno (nome e pontuacao de um aluno so)
func GetPontuacaoPorAluno(db *sql.DB, c *gin.Context){
	idStr := c.Param("id")

	id, err := strconv.Atoi(idStr)
    if err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
		return
    }

	pontos , err := database.PontosPorIDAluno(db, id)

	if err != nil{
		c.JSON(http.StatusInternalServerError, gin.H{
			"error":"erro ao buscar pontuacao por nome",
		})
		return
	}

	c.IndentedJSON(http.StatusOK, pontos)
}

//PARA SER FEITO
func PostPontuacao(db *sql.DB, c *gin.Context){
	database.AdicionarPontuacao(db, c)
}
