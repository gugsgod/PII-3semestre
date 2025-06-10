package database

import(
	"database/sql"
	"time"
	_ "github.com/go-sql-driver/mysql"
)

func dbConnect(){
	dsn := "gugs:123321@tcp(34.39.135.86)/pii"

	db, err := sql.Open("mysql", dsn)

	if err != nil {
		panic(err)
	}
}
