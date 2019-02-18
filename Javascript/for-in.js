// for in loop syntax

let obj = {
	"Name" : "Chikku P A",
	"Age" : 29,
	"Sex" : "Male",
	"DOB" : "05/09/1989"
}

for (var prop in obj){
	console.log("Property: " + prop + " Value: " + obj[prop] + "\n");
}

