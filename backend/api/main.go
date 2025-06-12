package main

import (
	"github.com/gin-gonic/gin"
	"backend/controllers"
	"backend/database"
)

func main(){
	db, err := database.DbConnect()
	if err != nil{
		return
	}

	r := gin.Default()

	r.GET("/alunos", func(c *gin.Context){
		controllers.GetAlunos(db, c)
	})

	r.Run("localhost:8080")
}
