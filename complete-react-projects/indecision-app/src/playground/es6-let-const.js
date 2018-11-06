var nameVar = 'Adam';
var nameVar = 'Dennis';
console.log('nameVar', nameVar);

let nameLet = 'Brad';
nameLet = 'Tom';
console.log('nameLet', nameLet);

const nameConst = 'Emily';
console.log('nameConst', nameConst);

function getPetName() {
  const petName = 'Hal';
  return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping

const fullName = 'Andrew Mead';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
