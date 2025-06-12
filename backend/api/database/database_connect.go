package database

import(
	"database/sql"
	"fmt"
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
	fmt.Printf("Conectado ao banco de dados\n")
	return db, nil
}
