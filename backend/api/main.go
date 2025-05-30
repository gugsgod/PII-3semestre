package main

import (
	"github.com/gin-gonic/gin"
	"backend/api/controllers"
)

func main(){
	router := gin.Default()
	router.GET("/alunos", controllers.GetAlunos)
	router.POST("/alunos", controllers.PostAlunos)
	router.Run("localhost:8080")
}
