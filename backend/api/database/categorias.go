package database

import (
	"backend/models"
	"database/sql"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"net/http"
	"strconv"
)

func Categorias(db *sql.DB) ([]models.Categorias, error) {
	var sliceCategorias []models.Categorias

	query := `
		SELECT nome_pontuacao, pontos
		FROM categoria
	`

	rows, err := db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var resultado models.Categorias
		if err := rows.Scan(&resultado.NOME, &resultado.PONTOS); err != nil {
			return nil, err
		}
		sliceCategorias = append(sliceCategorias, resultado)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}
	return sliceCategorias, nil
}

func AdicionarCategoria(db *sql.DB, c *gin.Context) {
	type Categoria struct {
		ID     int64  `json:"id_pontuacao"`
		Nome   string `json:"nome_pontuacao"`
		Pontos int64  `json:"pontos"`
	}

	var cat Categoria
	if err := c.BindJSON(&cat); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	_, err := db.Exec("INSERT INTO categoria (id_pontuacao, nome_pontuacao, pontos) VALUES (?, ?, ?)", cat.ID, cat.Nome, cat.Pontos)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"status": "categoria adicionada"})
}

func RemoverCategoria(db *sql.DB, c *gin.Context) {
	param := c.Param("id")
	id, err := strconv.Atoi(param)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
		return
	}
	_, err = db.Exec("DELETE FROM categoria WHERE id_pontuacao = ?", id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"status": "categoria removida"})
}
