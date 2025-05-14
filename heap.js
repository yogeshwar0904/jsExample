
/*
Heap menas store the Size and allocate memory.
It store non Primitive data.
It allocate a memory in Dynamic.
It can be Mutable because reference point to same Object.
Size and memory fixed at run time.
*/
let human = {
  name: "James",
  age: 23,
  isMale: true,
};

console.log(human);
let animal = human;
console.log(animal);
animal.name = "bond";
console.log(human);

/*
To Make the Object Immutable we will follow 
Deep Copy 
Shallow Copy
*/

//deepCopy
let person = {
  name: "James",
  age: 23,
  isMale: true,
};

let newPerson = JSON.parse(JSON.stringify(person));

console.log(newPerson);

//ShallowCopy
let person1 = {
  name: "James",
  age: 23,
  isMale: true,
};
let person2 = person1;
let newPerson2 = Object.assign({}, person);

person1.name="";
console.log(newPerson2);
console.log(person2);
