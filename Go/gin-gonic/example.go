package main

import "github.com/gin-gonic/gin"
import "fmt"

type details struct {
	Name string `json:"name"`
}

func main() {
	// var det1 = details{name: "Chikku"}
	// names := []details{
	// 			details{name : "lena"}, 
	// 			details{name: "austin"}, 
	// 			details{name: "foo"},
	// 		}

	fmt.Println("Exit")

	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	res := []details{
					details{Name : "lena"}, 
					details{Name: "austin"}, 
					details{Name: "foo"},
				}
	
	r.GET("/pong", func(c *gin.Context) {
		c.JSON(200, res)
	})
	r.Run(":8080") // listen and serve on 0.0.0.0:8080
}
