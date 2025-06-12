package db

import(
	"database/sql"
	"backend/models"
	_ "github.com/go-sql-driver/mysql"
)

func NomePontuacao(db *sql.DB) ([]models.NomePontos ,error){
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
	
	for rows.Next(){
		var a models.NomePontos
		if err := rows.Scan(&a.NOME, &a.PONTOS); err != nil {
			return nil,err
		}
		slicePontos = append(slicePontos, a)
	}

	if err := rows.Err(); err != nil {
    	return nil, err
	}

	return slicePontos, nil
}

func PontosPorIDAluno(db *sql.DB, id int) (models.NomePontos, error){
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
		return nil, err
	}

	return resultado, nil
}


