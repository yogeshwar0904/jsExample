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
map() 
*/


