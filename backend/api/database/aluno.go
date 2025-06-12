package db

import(
	"database/sql"
	"backend/models"
	_ "github.com/go-sql-driver/mysql"
)

func Alunos(db *sql.DB) ([]models.NomeAluno, error){
	var sliceAlunos []models.NomeAluno

	query := `
		SELECT id_aluno, nome
		FROM users
	`

	rows, err := db.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next(){
		var resultado models.NomeAluno
		if err := rows.Scan(&resultado.ID, &resultado.NOME); err != nil {
			return nil, err
		}
		sliceAlunos = append(sliceAlunos, resultado)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return sliceAlunos, nil
}

func AlunosTurma(db *sql.DB, turma int) ([]models.NomeAluno, error){
	var sliceAlunos []models.NomeAluno

	query := `
		SELECT id_aluno, nome
		FROM users
		WHERE id_turma = ?
	`

	rows, err := db.Query(query, turma)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	
	for rows.Next(){
		var resultado models.NomeAluno

		if err := rows.Scan(&resultado.ID, &resultado.NOME); err != nil {
			return nil, err
		}
		sliceAlunos = append(sliceAlunos, resultado)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return sliceAlunos, nil

}
