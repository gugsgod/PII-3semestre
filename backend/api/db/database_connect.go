package database

import(
	"database/sql"
	"time"
	_ "github.com/go-sql-driver/mysql"
)

func dbConnect(){
	db, err := sql.Open("mysql", "user:password@dbname)
	if err != nil {
		panic(err)
	}
}
