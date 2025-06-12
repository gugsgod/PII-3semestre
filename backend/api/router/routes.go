package routes

import (
	"backend/api/controllers"
	"database/sql"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

func todasAsRotas(db *sql.DB, r *gin.Engine) {

	//ROTAS JWT
	r.POST("/jwtlogin", func(c *gin.Context) {
		controllers.LoginHandler(db, c)
	})
	r.GET("/jwtcoordenacao", controllers.MiddlewareAutenticacao(), controllers.RotaComPermissao("admin"))
	r.GET("/jwtprofessor", controllers.MiddlewareAutenticacao(), controllers.RotaComPermissao("professor"))
	r.GET("/jwtaluno", controllers.MiddlewareAutenticacao(), controllers.RotaComPermissao("aluno"))
}
