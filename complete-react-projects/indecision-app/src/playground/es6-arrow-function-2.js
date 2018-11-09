// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
  name: 'Adam',
  cities: ['Rogerstowne, NY', 'New Meeting, PA', 'Villanova, PA'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printPlacesLived());

// Challenge squareArrow
const multiplier = {
  // numbers - array of numbers
  numbers: [1, 3, 9],
  // multiplyBy - single number
  multiplyBy: 4,
  // multiply - return a new array where the numbers have been multiplied
  multiply() {
    return this.numbers.map((number => this.multiplyBy * number));
  }
};

console.log(multiplier.multiply());
