package database

import (
	"backend/models"
	"database/sql"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"net/http"
)

func Atividades(db *sql.DB) ([]models.Atividades, error) {
	var sliceAtividades []models.Atividades

	query := `
	SELECT id_atividade, nome_atividade
	FROM atividades
	`

	rows, err := db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var resultado models.Atividades
		if err := rows.Scan(&resultado.ID, &resultado.NOME); err != nil {
			return nil, err
		}
		sliceAtividades = append(sliceAtividades, resultado)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return sliceAtividades, nil
}

func AtividadesTurma(db *sql.DB, turma int) ([]models.Atividades, error) {
	var sliceAtividades []models.Atividades

	query := `
	SELECT id_atividade, nome_atividade
	FROM atividades
	WHERE id_turma = ?
	`

	rows, err := db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var resultado models.Atividades
		if err := rows.Scan(&resultado.ID, &resultado.NOME); err != nil {
			return nil, err
		}
		sliceAtividades = append(sliceAtividades, resultado)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return sliceAtividades, nil

}
func AdicionarAtividade(db *sql.DB, c *gin.Context) {
	type Atividade struct {
		ID        int64  `json:"id_atividade"`
		Nome      string `json:"nome_atividade"`
		Categoria string `json:"categoria"`
		IdMateria int64  `json:"id_materia"`
		Data      string `json:"data_atividade"`
		IdTurma   int64  `json:"id_turma"`
	}

	var a Atividade
	if err := c.BindJSON(&a); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	query := `INSERT INTO atividades (id_atividade, nome_atividade, categoria, id_materia, data_atividade, id_turma) VALUES (?, ?, ?, ?, ?, ?)`
	_, err := db.Exec(query, a.ID, a.Nome, a.Categoria, a.IdMateria, a.Data, a.IdTurma)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"status": "atividade adicionada"})
}

func RemoverAtividade(db *sql.DB, c *gin.Context) {
	id := c.Param("id")
	_, err := db.Exec("DELETE FROM atividades WHERE id_atividade = ?", id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"status": "atividade removida"})
}
