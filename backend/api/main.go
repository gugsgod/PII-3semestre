package main

import (
	"github.com/gin-gonic/gin"
	"backend/controllers"
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
	r.GET("/alunos", func(c *gin.Context){
		controllers.GetAlunos(db, c)
	})

	r.Run("localhost:8080")
}
