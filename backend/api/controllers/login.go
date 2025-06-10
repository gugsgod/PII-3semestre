package controllers

import(
	"net/http"
	"backend/api/models"
	"github.com/gin-gonic/gin"
)

func PostLogin(c *gin.Context){
	var login models.Login

	if err := c.BindJSON(&login); err != nil{
		return
	}
	// funcao da database para testar login


}
