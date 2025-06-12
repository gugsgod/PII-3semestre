package main

import (
	"github.com/gin-gonic/gin"
	"backend/controllers"
	"backend/database"
)

func main(){
	router := gin.Default()
	router.GET("/alunos", controllers.GetAlunos)
	router.GET()
	router.POST("/alunos", controllers.PostAlunos)
	router.Run("localhost:8080")
}
