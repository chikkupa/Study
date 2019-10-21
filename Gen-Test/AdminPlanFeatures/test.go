package main

import (
	"fmt"
	"strings"
)

func seperateWithUnderScore(value string) string {
	var rValue []rune
	for index, char := range []rune(value) {
		if char >= 'A' && char <= 'Z' && index > 0 {
			rValue = append(rValue, '_')
		}
		rValue = append(rValue, char)
	}
	return string(rValue)
}

func getConstantName(value string) string {
	return strings.ToUpper(seperateWithUnderScore(value))
}

func getLowerConstantName(value string) string {
	return strings.ToLower(seperateWithUnderScore(value))
}

func main() {
	fmt.Println(seperateWithUnderScore("PlanFeaturesFeatures"))
	fmt.Println(getConstantName("PlanFeaturesFeatures"))
}
