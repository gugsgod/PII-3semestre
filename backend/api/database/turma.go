package database

import (
	"backend/models"
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
)

func Turmas(db *sql.DB) ([]models.Turmas, error) {

	var sliceTurmas []models.Turmas

	query := `
	SELECT id_turma, nome_turma
	FROM turmas
	`

	rows, err := db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var resultado models.Turmas
		if err := rows.Scan(&resultado.ID, &resultado.NOME); err != nil {
			return nil, err
		}
		sliceTurmas = append(sliceTurmas, resultado)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}
	return sliceTurmas, nil
}
