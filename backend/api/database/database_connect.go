package db

import(
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
)

func DbConnect() (*sql.DB,error){
	dsn := "gugs:123321@tcp(34.39.135.86)/pii"

	db, err := sql.Open("mysql", dsn)

	if err != nil {
		return nil, err
	}

	if err := db.Ping(); err != nil {
		return nil, err
	}
	return db, nil
}
