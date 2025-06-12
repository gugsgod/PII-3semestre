package database

import (
	"database/sql"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"net/http"
)

func AtribuirNota(db *sql.DB, c *gin.Context) {
	type Nota struct {
		IDNota      int64   `json:"id_nota"`
		IdUsuario   int64   `json:"id_usuario"`
		IdAtividade int64   `json:"id_atividade"`
		Nota        float64 `json:"nota"`
	}

	var n Nota
	if err := c.BindJSON(&n); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	_, err := db.Exec("INSERT INTO notas (id_nota, id_usuario, id_atividade, nota) VALUES (?, ?, ?, ?)", n.IDNota, n.IdUsuario, n.IdAtividade, n.Nota)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"status": "nota atribuída"})
}
