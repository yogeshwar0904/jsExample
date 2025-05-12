/*
call stack engine represent a track for the order of excicution 
follow Last in First out.
*/

function firstFunction(){
    console.log("firstFunction Started");
   secondFunction();
   console.log("firstFunction Ended");
}

function secondFunction(){
     console.log("secondFunction Started");
     thirdFunction();
     console.log("secondFunction Ended");
}

function thirdFunction(){
  console.log("thirdFunction Started");
  fourthFunction();
  console.log("thirdFunction Ended");
}

function fourthFunction(){
   console.log("fourthFunction Started");
   console.log("fourthFunction Ended");
}

firstFunction();