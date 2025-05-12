/*
Global scope Vs Function scope Vs Block scope
*/

/*
What is scope in Js?
In javascript wether we could able to access variable, object, fuction and visibility.
*/

var globalConstant = "Hi Im global scope";

function functionExample(){
    let functioncScope = "Hey I'm function scope";
    if(true) {
      let blockVeriable = "Hey I'm block scope";
      console.log(blockVeriable);
    }
    console.log(functioncScope);
}
functionExample();
console.log(globalConstant);