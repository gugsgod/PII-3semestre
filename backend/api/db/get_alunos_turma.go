package database

import(
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
)

func GetAlunosTurma(db *sql.DB, turma int) {
	db.Open()
}
