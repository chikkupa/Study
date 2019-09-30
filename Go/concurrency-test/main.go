package main

import (
	"fmt"
	"time"
)

func main() {
	go fmt.Println("Line 1")

	for i := 0; i < 10; i++ {
		go fmt.Println(i)
	}

	go fmt.Println("Line 2")

	time.Sleep(100 * time.Microsecond)
}
