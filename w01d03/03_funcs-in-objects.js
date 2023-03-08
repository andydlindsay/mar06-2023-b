// `this` and arrow function don't mix

const user = {
  firstName: 'alice',
  lastName: 'wonderland',
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
}

user.fullName();

let car = {
  color: 'yellow',
  licensePlate: 'hello wrld',
  startTheEngine: function() {
    console.log(`${this.color} car goes vroooom`);
  },
  bff: {
    color: 'grey',
    model: 'station wagon',
    sayMyColor: function() {
      console.log(`the color is ${parent.color}`);
    }
  }
};

car.bff.sayMyColor();

const copy = car;
car = null;

console.log(copy);
copy.startTheEngine();
