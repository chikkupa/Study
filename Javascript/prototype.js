Array.prototype.sum = function () {
    let sum = 0;
    let length = this.length;
    for (let i = 0; i < length; i++) {
      sum += this[i];
    }
    return sum;
}

Array.prototype.avg = function () {
    return this.sum() / this.length;
}

const arr = [1, 2, 3, 4, 5];
console.log("Sum: " + arr.sum());
console.log("Average: " + arr.avg());

arr.map(item => {console.log("Hi")});