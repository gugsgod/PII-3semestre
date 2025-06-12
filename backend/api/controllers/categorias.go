package controllers

import(
	"net/http"
	"database/sql"
	"backend/database"
	"github.com/gin-gonic/gin"
)

func GetCategorias(db *sql.DB, c *gin.Context){
	sliceCategorias, err := database.Categorias(db)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error":"erro ao buscar categorias",
		})
		return
	}

	c.IndentedJSON(http.StatusOK, sliceCategorias)
}

func PostCategorias(db *sql.DB, c *gin.Context){
	database.AdicionarCategoria(db, c)
}

func RemoverCategorias(db *sql.DB, c *gin.Context){
	database.RemoverCategoria(db , c)
}
