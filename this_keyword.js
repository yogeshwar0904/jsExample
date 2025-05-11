/*
This keyword by default always point to the windows object
*/
console.log("Hey let see about this keyword", this);

/*
In side the object it point to current Object 
when we used in normal function[this will refer to lexical scope].
*/
const currentObject = {
    id:1,
    name: "yoga",
    gender: "Male",
    function() {
       console.log("hi",this);
       return  this;
        
    }
    
}
console.log("Hey here is the Object prperties::", currentObject.function());

/*
In side the object it point to window Object 
when we used in Arrow function[this will refer to global scope].
*/

const arrowFunction = {
    id:1,
    myName:"Yoga",
    
    function : () =>{
        console.log("Hi I'm iside the arrow", this);
        return this;
    }
}
console.log("Hey here is your Arrow function==>>", arrowFunction.function());
/*
why Arow function this point to windows object?
because it inherit this from global scope.
but when we use strct mode it will become undefined.
*/
const newobject = {
myName:"yoga",
myID:9,
function9: function(){
    
   const  imArrow = () => {
        console.log(this);
    };
    imArrow();
}

}
console.log("success:::", newobject.function9());