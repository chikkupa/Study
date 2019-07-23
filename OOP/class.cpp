#include<iostream>
#include<string>

using namespace std;

class Car{
    private:
        string make;
        string model;
        int noPassengers;
        string color;
        int maxSpeed;

    public:
        Car(string make, string model, int noPassengers, string color, int maxSpeed){
            this->make = make;
            this->model = model;
            this->noPassengers = noPassengers;
            this->color = color;
            this->maxSpeed = maxSpeed;
            cout<<"In Constructor"<<endl;
        }

        void start(){
            cout<<"Car Started!"<<endl;
        }

        void accelerate(){
            cout<<"Accelerated!"<<endl;
        }

        void brake(){
            cout<<"Stopped!"<<endl;
        }

        void print(){
            cout<<"Make: "<<this->make<<endl;
            cout<<"Model: "<<this->model<<endl;
            cout<<"No Passengers: "<<this->noPassengers<<endl;
            cout<<"Color: "<<this->color<<endl;
            cout<<"Max Speed: "<<this->maxSpeed<<endl;
        }
        ~Car(){
            cout<<"In Distructor"<<endl;
        }
};

int main(){
    Car polo("Volkswagen", "Polo", 5, "Green", 200);
    polo.print();
}
