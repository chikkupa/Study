package main

import "fmt"

type contactInfo struct {
	email   string
	zipCode int
}

type person struct {
	firstName string
	lastName  string
	contactInfo
}

func (p person) print() {
	fmt.Println(p)
}

func (p *person) updateName(name string) {
	p.firstName = name
}

func main() {
	user := person{firstName: "Chikku", lastName: "P A", contactInfo: contactInfo{email: "chikku@hashinin", zipCode: 695316}}

	user.updateName("Chindu")
	user.print()
}
