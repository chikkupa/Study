package main

import "fmt"

func main() {
	total := sum(1, 2, 3)
	fmt.Println(total)
	total = sum(4, 6, 9, 18)
	fmt.Println(total)
	nums := []int{4, 6, 8, 9, 2}
	total = sum(nums...)
	fmt.Println(total)
}

func sum(nums ...int) int {
	total := 0

	for _, num := range nums {
		total += num
	}
	return total
}
