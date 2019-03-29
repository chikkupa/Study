package main

import(
	"strings"
	"fmt"
)

func main(){
	fmt.Println("abcda => ", isIsogram("abcda"))
}

func isIsogram(value string) bool {
	value = strings.ToUpper(value)
	for i, char := range value {
		if char != ' ' && char != '-' && i < len(value) {
			if strings.Contains(value[i + 1:], string(char)){
				return false
			}
		}
	}
	return true
}