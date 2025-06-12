package main

import (
	"github.com/gin-gonic/gin"
	"backend/database"
	"backend/routes"
)

func main(){
	db, err := database.DbConnect()
	if err != nil{
		return
	}

	r := gin.Default()

	routes.TodasAsRotas(db, r)

	r.Run("localhost:8080")
}
