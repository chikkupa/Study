package main

func main(){
	var array = []int{2, 3, 4, 5}

}

func lcm(a, b) int {
	return a*b/gcd(a,b)
}

func gcd(a, b) int {
	if a%b == 0 {
		return a/b
	} else if b % a
}