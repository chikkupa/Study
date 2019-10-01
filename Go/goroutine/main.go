package main

import (
	"fmt"
	"runtime"
	"time"
)

func main() {
	delayedPrint("Hi", 100*time.Millisecond)
	delayedPrint("How are you?", 10*time.Millisecond)
	delayedPrint("This should print first", time.Millisecond)
	sampleroutine()
	time.Sleep(2 * time.Second)
	var numCPU = runtime.NumCPU()
	fmt.Println("No of CPUs: ", numCPU)
	numCPU = runtime.GOMAXPROCS(0)
	fmt.Println("No of CPUs: ", numCPU)
}

func delayedPrint(text string, delay time.Duration) {
	go func() {
		time.Sleep(delay)
		fmt.Println(text)
	}()
}

func sampleroutine() {
	ch := make(chan int)

	parallel := func(x int, y int) {
		ch <- (x + y)
	}

	go parallel(10, 20)
	go fmt.Println("The sum is ...")
	go parallel(<-ch, 20)
	sum := <-ch
	fmt.Println(sum)
}
