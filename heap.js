
/*
Heap means store the Size and allocate memory.
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
    deepCopy: {
        status: "Single"
    }
};

let newPerson = JSON.parse(JSON.stringify(person));

newPerson.age = 30;
newPerson.deepCopy.status = "Taken"
console.log(person);
console.log("New person", newPerson);

/*
Using spread Operator
*/
let shallowCopy = {
    name: "Yoga",
    id: 1,
    role: "Admin",
    secondlevelObject: {
        num: 12345
    }
}

const example1 = { ...shallowCopy };
example1.name = "nameChanged";
example1.id = 9;
example1.role = "Usr";
example1.secondlevelObject.num = 99999;
console.log(shallowCopy);
console.log(example1);


/*
Using Assign method
*/

let shallowCopy2 = {
    name: "Siva",
    id: 9,
    Role: "User",
    secondlevelObject: {
        isEmployee: true
    }
}
 let objectCopy = Object.entries(shallowCopy2);
 objectCopy.id =100;
 console.log("Hey Im the create method", objectCopy , "00000000000000");
 
let example2 = Object.assign({}, shallowCopy2);
example2.name = "nameChanged";
example2.Role = "Admin";
example2.id = 7;
example2.secondlevelObject.isEmployee = false;
console.log(shallowCopy2);
console.log(example2);