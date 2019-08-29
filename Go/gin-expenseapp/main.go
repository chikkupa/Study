package main

import (
	"github.com/gin-gonic/gin"
	"fmt"
	"gin-expenseapp/controller"
)

func main() {
	fmt.Println("Exit")

	r := gin.Default()

	r.GET("/", controller.HomePage)
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.Run(":8080")
}