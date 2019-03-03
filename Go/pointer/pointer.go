package main

import (
	"fmt"
	"unsafe"
)

func main() {
	var a *int
	b := 10
	a = &b

	fmt.Println("Pointer variable (a): ", a)
	fmt.Println("Size of pointer: ", unsafe.Sizeof(a))
}
