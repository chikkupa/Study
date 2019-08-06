#include<stdio.h>

long int factorial(int);

int main()
{
    printf("Factorial(5): %ld\n", factorial(5));
    return 0;
}

long int factorial(int n)
{
	long int fact = 1;
	int i;

	for(i = 2; i <= n; i++){
		fact = fact * i;
	}
	return fact;
}
