package main

import "fmt"

func main() {
	printStar(5)
}

func printStar(n int) {
	if n == 1 {
		fmt.Print("*")
		fmt.Println()
	} else {
		for i := 0; i < n; i++ {
			fmt.Print("*")
		}
		fmt.Println()
		printStar(n - 1)
	}

}
