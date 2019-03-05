package main

import "fmt"

func main() {
	slice := make([]int, 3)

	fmt.Println(slice)
	slice[1] = 10
	fmt.Println(slice)
	slice = append(slice, 46)
	fmt.Println(slice)
	slice = append(slice, 36, 27)
	fmt.Println(slice)
	newSlice := slice[2:5]
	fmt.Println(newSlice)
	newSlice = slice[:5]
	fmt.Println(newSlice)
	newSlice = slice[2:]
	fmt.Println(newSlice)
	newSlice = slice[:]
	fmt.Println(newSlice)
	newSlice[2] = 79
	fmt.Println(newSlice)
	fmt.Println(slice)
	newSlice = slice
	fmt.Println(newSlice)

	copy(newSlice, slice)
	fmt.Println("After Copy")
	newSlice[4] = 100
	fmt.Println(newSlice)
	fmt.Println(slice)

	newSlice = append(slice[:2], slice[4:]...)
	fmt.Println(newSlice)

	strSlice := make([]string, 3)
	strSlice[1] = "Slice Element 1"
	fmt.Println(strSlice)
	strSlice[0] = "Slice Element 0"
	fmt.Println(strSlice)
}
