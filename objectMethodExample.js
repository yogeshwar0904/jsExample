//  assign() used to combine the two object.
const jewel1 = {
    applicationPurpose:"Jewel sales",
    location: "cuddalore"
}

const vehicel = {
    type: "cycle"
}

const combinedObject = Object.assign(jewel1, vehicel);

console.log("Assign() Method:::::", combinedObject);

// create() will map the prototype of some other object properties.


const subCompany = {
    name:"element5",
    totalEmployee:"200"
}
console.log(Object.getPrototypeOf(subCompany));
const createExample = Object.create(subCompany);
console.log("Hiiiiiiiiiii",Object.getPrototypeOf(createExample));
console.log("create() Method Example::::::createExample", Object.getPrototypeOf(createExample) === subCompany);
console.log("create() Method Example::::::subCompany", Object.getPrototypeOf(subCompany));

//entries() converts the Object to Array of Array;  

const company = {
    name : "ideas2IT",
    totalEmployee: "1k"
}

console.log("entries() Method example", Object.entries(company));

// keys() will retrive the keys of an Objects as array values.

console.log("keys() Method example", Object.keys(company)); 

// values() will retive the values of an object as array values.

console.log("values() Method example", Object.values(company));

/* 
freeze(). freeze the object which mean could not add the property
and cannot modify Object value.
*/
const brand = {
    puma:"shoes",
    wildcraft:"bags"
}
console.log("freeze() Method example ", Object.freeze(brand));
brand.titan = "watch";
brand.puma = "shirt"
console.log("freeze() Method example after", brand);

/*
seal() seal the Object which mean unable to add the property but 
we can modify existing property.
*/
const cloths = {
    type : "cotton",
    brand: "Otoo"
}
Object.seal(cloths);
cloths.type ="silk"
cloths.isAvailable = true;
console.log("seal() method Example:::: after", cloths);

/*
map() It specifically design for Array. If we want to use Map we 
must use keys(), values(), entries() because we don't directly Iterate 
plain object need to convert to array.

fromEntries() - convert Array to object.
entries() - return key and velue of an Object.
filter() - help to filter values based on condition inside the function.
map() - Iterate and return the value. 
*/
const num = {
    a:1,
    b:2,
    c:3
};
// console.log("Hey Bacga I'm the entries() example",Object.entries(num));
const iteration = Object.fromEntries(Object.entries(num).filter(([_,value]) => { return  value >1}).map(([key,value])=>{
   return [key,value*2]
}))
console.log("hey I'm the Map function::::" ,iteration);

// Reduce()

const numReduce = 
    Object.entries(num).reduce((acc,[ _,value]) => {value = acc +value; return  value},0)
;  
console.log("reduce() Example:::::::::",numReduce);

// example 2
 const newReduce = 
    Object.entries(num).reduce((accumulator, [key, value]) =>{
        if(value>1){
            accumulator[key] = value + 10
        }
        return accumulator;
    },{})
 ;
 console.log("create new object using reduce() ", newReduce);

 // Example 3
const basket = ['Potato','Apple', 'Grapes', 'Grapes', 'Grapes', 'Potato']

const useReduce = basket.reduce( (accelorator, fruites) => {
accelorator[fruites] = (accelorator[fruites] || 0) + 1
return accelorator;
},{});

console.log("Hey I'm the fruites:::::::", useReduce);

// Example 4 
const people = [
  { name: 'Alice', gender: 'female' },
  { name: 'Bob', gender: 'male' },
  { name: 'Eve', gender: 'female' },
];

const grouped = people.reduce((accelorator, group) => {

  accelorator[group.gender] = accelorator[group .gender] || [];
   accelorator[group.gender].push(group.name);
   return accelorator;
},{})

console.log(grouped); // { female: ['Alice', 'Eve'], male: ['Bob'] }