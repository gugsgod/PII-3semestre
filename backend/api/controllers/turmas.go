package controllers

import(
	"net/http"
	"database/sql"
	"backend/api/database"
	"backend/api/models"
	"github.com/gin-gonic/gin"
)

func GetTurmas(db *sql.DB, c *gin.Context){
	sliceTurmas, err := database.Turmas(db)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error":"erro ao buscar turmas"
		})
		return
	}

	c.IndentedJSON(http.StatusOK, sliceTurmas)
}
