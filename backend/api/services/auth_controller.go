package main

import (
	"fmt"
	"time"
	"net/http"
	"strconv"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func main(){
	var secretKey = []byte("eucomococoabeca")
	
	fmt.Println(secretKey)
}