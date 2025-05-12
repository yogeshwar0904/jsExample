/*
Behind the Event loop We have
*Call Stack
*Web APIs
*Callback Queue
*Event loop
*/

/*
* Javascript is a single threaded model run at one time.
One call Stack.
* Web APIs provide the methods to over come blocking 
and achive Async Operation.
* Callback Queue preoritise method to execute.
* Event Loop monitor the stack if stack is empty it push 
 methods to call stack from Queue.
*/

/*
Example based on call stack
*/

function multiply(a,b){
    return a*b;
}

function square(n){
  return multiply(n,n); 
}

function printSquare(n){
    var veriable = square(n);
    console.log(veriable);
}

// printSquare(9);

// navigator.geolocation.getCurrentPosition(
//     //Success Call back
//     position => console.log(position),
//     //Error Call back
//     error => console.error(error)
// )

function syncAsyncExample1(){
// syncronous    
console.log("Hey I'm Started");

//Asyncronous
setTimeout( () =>{
    console.log("Hey you may call me as callBack Queue or macroTask");
},0);

//syncronous
console.log("Hey I'm Ended");
}

//syncAsyncExample();


function syncAsyncExample1() {
setImmediate(() => console.log('B'));

console.log("Hey I'm Started");

//Macro Task or call back Queue
setTimeout(() => {
    console.log("Hey I'm Started implementing Time Out");
},0)

// Micro Task or Preority Queue
Promise.resolve().then(()=>{
    console.log("Hey I'm started Implementing the Promise function");
})

console.log("Hey I'm Ended");
}
// syncAsyncExample1();


function syncAsyncExample2(){
    // console.log("");
     console.log("Hey I'm first Dood");

     setTimeout(()=>{
        console.log("Im the four");
        Promise.resolve().then(()=>{
            console.log("Im the five");
            setTimeout(()=>{
               console.log("Im the eight");
            },0)
        });
     },0);

     //Promise.resolve().then(()=>{});
     Promise.resolve().then(()=>{
         console.log("Im the third excecusion");
         setTimeout(()=>{
            console.log("Im the six");
            Promise.resolve().then(()=>{
                console.log("Im the seven");
            });
         },0)
     });

     console.log("Im second Dood");
}

syncAsyncExample2();