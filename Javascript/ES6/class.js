// Program to demonstrate the working of class in ES6

class Car {
	constructor(make, model, passengers, color, speed){
		this.make = make;
		this.model = model;
		this.passengers = passengers;
		this.color = color;
		this.maxspeed = speed;
	}
}

console.log(typeof Car);

let polo = new Car('Volkswagen', 'Polo', 5, 'Green', 200);
console.log(typeof polo);
console.log(polo);
