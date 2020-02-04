#include<iostream>

using namespace std;

int main(){
	int i = 0;
	cout<<++i*++i*++i<<endl;
	i = 2;
	cout<<++i + ++i * ++i<<endl;
}
