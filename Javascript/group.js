class Group extends Array {
  constructor(...value) {
    super();
    for (let i = 0; i < value.length; i++) {
      this[i] = value[i];
    }
  }
  sum = () => {
    let sum = 0;
    let length = this.length;
    for (let i = 0; i < length; i++) {
      sum += this[i];
    }
    return sum;
  }

  avg = () => {
    return this.sum() / this.length;
  }
}

const arr = new Group(1, 2, 3, 4, 5);
console.log("Sum: " + arr.sum());
console.log("Average: " + arr.avg());

arr.map(item => {console.log("Hi")});