package main

import (
	"fmt"
	"time"
)

func main() {
	go fmt.Println("Line 1")

	go func() {
		for i := 0; i < 100; i++ {
			fmt.Println(i)
		}
	}()

	go func() {
		for i := 1000; i < 1100; i++ {
			fmt.Println(i)
		}
	}()

	go fmt.Println("Line 2")

	time.Sleep(1000 * time.Microsecond)
}
