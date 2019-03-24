package main

import "fmt"

func main() {
	mapVar := make(map[string]int)

	mapVar["one"] = 1
	mapVar["two"] = 2
	mapVar["three"] = 3

	fmt.Println(mapVar)
	fmt.Println(mapVar["one"])

	delete(mapVar, "two")

	fmt.Println(mapVar)

	one, onePresent := mapVar["one"]
	two, twoPresent := mapVar["two"]

	fmt.Println("Value of One: ", one, " Is One Present: ", onePresent)
	fmt.Println("Value of Two: ", two, " Is Two Present: ", twoPresent)
	fmt.Println(mapVar["two"])

	colors := map[string]string{
		"red":   "#ff0000",
		"green": "#4bf745",
		"white": "#ffffff",
		"black": "#000000",
	}

	for color, hex := range colors {
		fmt.Println(color, "=>", hex)
	}

	delete(colors, "green")
	fmt.Println(colors)
}
