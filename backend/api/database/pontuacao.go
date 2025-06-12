package database

import (
	"backend/models"
	"database/sql"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"net/http"
)

func NomePontuacao(db *sql.DB) ([]models.NomePontos, error) {
	var slicePontos []models.NomePontos

	query := `
		SELECT users.nome, pontuacao.pontuacao
		FROM pontuacao
		JOIN users ON users.id_aluno = pontuacao.id_aluno
	`

	rows, err := db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var a models.NomePontos
		if err := rows.Scan(&a.NOME, &a.PONTOS); err != nil {
			return nil, err
		}
		slicePontos = append(slicePontos, a)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return slicePontos, nil
}

func PontosPorIDAluno(db *sql.DB, id int) (models.NomePontos, error) {
	var resultado models.NomePontos

	query := `
		SELECT users.nome, pontuacao.pontuacao
		FROM pontuacao
		JOIN users ON users.id_aluno = pontuacao.id_aluno
		WHERE id_aluno = ?
	`

	row := db.QueryRow(query, id)
	err := row.Scan(&resultado.NOME, &resultado.PONTOS)

	if err != nil {
		return models.NomePontos{}, err
	}

	return resultado, nil
}

func AdicionarPontuacao(db *sql.DB, c *gin.Context) {
	type Pontuacao struct {
		IdUsuario int64  `json:"id_usuario"`
		Nome      string `json:"nome"`
		Pontos    int64  `json:"pontos"`
	}

	var p Pontuacao
	if err := c.BindJSON(&p); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	_, err := db.Exec("INSERT INTO pontuacao (id_usuario, nome, pontos) VALUES (?, ?, ?)", p.IdUsuario, p.Nome, p.Pontos)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"status": "pontuação adicionada"})
}
