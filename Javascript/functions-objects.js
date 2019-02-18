// functions in objects

function Math(){
    this.sum = function(num1, num2){
        return num1 + num2;
    }
}

let calc = new Math();
let sum = calc.sum(20, 10);
console.log("Sum= " + sum)