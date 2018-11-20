
class Person {
  constructor(name = 'Anonymous') {
    this.name = name;
  }
  getGreeting() {
    // return 'Hi. I am ' + this.name + '!';
    return `Hi. I am ${this.name}!`;
  }
}

class PersonAge {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const me = new Person('Dennis Zoriani');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());

const him = new PersonAge('Dennis Zoriani', 15);
console.log(him.getDescription());

const anon = new PersonAge();
console.log(anon.getDescription());
