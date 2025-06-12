package database

import (
	"backend/models"
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
)

func Categorias(db *sql.DB) ([]models.Categorias, error) {
	var sliceCategorias []models.Categorias

	query := `
		SELECT nome, pontos
		FROM categorias
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
