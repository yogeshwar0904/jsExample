/*
Hey let see proto Vs prototype Vs [[prototype]]
*/

/*
what is __proto__?
proto is a property of object.
__proto__ is used to access the object.
*/

console.log("Hey Object",Object.prototype);

/*
what is [[prototype]] ?
[[prototype]] is all Object reference, which is a hidden veriable.
*/

const father = {lastName: "san"};
const son ={lastName: "Yoga"};

console.log("hey", father);

Object.setPrototypeOf(son, father);
console.log("hey", son.__proto__);

/*
what is prototype?
prototype is a property of function reference.
prototype is uses to access the function.
*/
function protoTypeExample(id, age){
    this.id = id;
    this.age=age;
    }

    protoTypeExample.prototype.somefunction = function(){
        console.log("Hi");
    }
 const firstExample = new protoTypeExample(1,27);

console.log("hey Object", protoTypeExample.prototype);
firstExample.somefunction();

console.log("Hello", protoTypeExample.prototype);
console.log(firstExample.__proto__ === protoTypeExample.prototype);