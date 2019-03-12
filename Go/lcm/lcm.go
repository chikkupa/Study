package main

import "fmt"

func main() {
	nums := []int32{2, 6}
	lcm := lcm(nums)

	fmt.Println("LCM: ", lcm)
}

func lcm(nums []int32) int32 {
	factors := make([]int32, 0)

	for i := 0; i < len(nums); i++ {
		facts := getFactors(nums[i])

		for j := 0; j < len(facts); j++ {
			isFactor := false
			for k := i; k < len(nums); k++ {
				if nums[k]%facts[j] == 0 {
					nums[k] = nums[k] / facts[j]
					isFactor = true
				}
			}
			if isFactor {
				factors = append(factors, facts[j])
			}
		}
	}

	result := int32(1)

	for i := 0; i < len(nums); i++ {
		result *= nums[i]
	}

	for i := 0; i < len(factors); i++ {
		result *= factors[i]
	}

	return result
}

func getFactors(num int32) []int32 {
	factors := make([]int32, 0)
	for i := int32(2); i <= num/2; i++ {
		if num%i == 0 {
			factors = append(factors, i)
		}
	}
	factors = append(factors, num)
	return factors
}
