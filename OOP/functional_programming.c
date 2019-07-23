#include<stdio.h>

long int factorial(int);

int main()
{
    printf("Factorial(5): %ld\n", factorial(5));
    return 0;
}

long int factorial(int n)
{
    if(n==0||n==1)
        return 1;
    else
        return (n*factorial(n-1)); // n * (n - 1)!
}