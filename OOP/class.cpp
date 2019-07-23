#include<iostream>
#include<string>

using namespace std;

class Car{
    private:
        string make;
        string model;
        int noPassengers;

    public:
        Car(string make, string model, int noPassengers){
            this->make = make;
            this->model = model;
            this->noPassengers = noPassengers;
        }

        void start(){
            cout<<"Car Started!";
        }

        void print(){
            cout<<"Make: "<<this->make<<endl;
            cout<<"Model: "<<this->model<<endl;
            cout<<"No Passengers: "<<this->noPassengers<<endl;
        }
};

int main(){
    Car polo("Volkswagen", "Polo", 5);
    polo.print();
}
