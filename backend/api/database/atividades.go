package database

import(
	"database/sql"
	"backend/models"
	_ "github.com/go-sql-driver/mysql"
)

func Atividades(db *sql.DB) ([]models.Atividades, error){
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

	for rows.Next(){
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

func AtividadesTurma(db *sql.DB, turma string) (string, error){
	var sliceAtividades []models.Atividades

	query = `
		SELECT id_atividade, nome_atividade
		FROM atividades
		WHERE id_turma = ?
	`

	rows, err := db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close
	
	for rows.Next(){
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
