package routes

import (
	"backend/controllers"
	"database/sql"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

func TodasAsRotas(db *sql.DB, r *gin.Engine) {
	// GET PARA PAGINA
	r.GET("/alunos", func(c *gin.Context){
		controllers.GetAlunos(db, c)
	})
	r.GET("/alunosturma", func(c *gin.Context){
		controllers.GetAlunosTurma(db, c)
	})
	r.GET("/atividades", func(c *gin.Context){
		controllers.GetAtividades(db, c)
	})
	r.GET("/atividadesturma", func(c *gin.Context){
		controllers.GetAtividadesPorTurma(db, c)
	})
	r.GET("/categoria", func(c *gin.Context){
		controllers.GetCategorias(db, c)
	})
	r.GET("/pontuacao", func(c *gin.Context){
		controllers.GetNomeEPontuacao(db, c)
	})
	r.GET("/pontuacaoaluno", func(c *gin.Context){
		controllers.GetPontuacaoPorAluno(db,c)
	})
	r.GET("/turmas", func(c *gin.Context){
		controllers.GetTurmas(db, c)
	})
	// ROTAS VALIDACAO DE EMAIL (E ENVIO DE SENHA)
	r.GET("/confirmar", func(c *gin.Context) {
		controllers.ValidaUsuario(db, c)
	})
	r.GET("/registrar", func(c *gin.Context) {
		controllers.EnviaEmailDeValidacao(c)
	})
	//ROTAS JWT
	r.POST("/jwtlogin", func(c *gin.Context) {
		controllers.LoginHandler(db, c)
	})
	r.GET("/jwtcoordenacao", controllers.MiddlewareAutenticacao(), controllers.RotaComPermissao("admin"))
	r.GET("/jwtprofessor", controllers.MiddlewareAutenticacao(), controllers.RotaComPermissao("professor"))
	r.GET("/jwtaluno", controllers.MiddlewareAutenticacao(), controllers.RotaComPermissao("aluno"))
}
