package main

import "fmt"

// Student Structure
type Student struct {
	name   string
	rollNo int
	gender string
}

func (st Student) getName() string {
	return st.name
}

func (st Student) getRollNo() int {
	return st.rollNo
}

func (st Student) getGender() string {
	return st.gender
}

func (st *Student) setName(name string) {
	st.name = name
}

func main() {
	student := Student{
		name:   "Chikku P A",
		rollNo: 11,
		gender: "Male",
	}

	fmt.Println(student.getName())
	fmt.Println(student.getRollNo())
	fmt.Println(student.getGender())
	student.setName("Chindu")
	fmt.Println(student)
}
