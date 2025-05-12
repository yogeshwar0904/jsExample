



let myName = "yoga";

function printStatement(){
    console.log(myName);
}

myName = "siva";

printStatement();

/*
A innerfunction inside the Outerfunction the inner function
 will able to access the outer function veriable called closure.
 Closure are used to Encapsulate the veriable and maintain the state
*/
function outerFunction(outer) {
     let count = 0;
    return function innerFunction(inner) {
        count++;
        // console.log(count);
        // console.log(inner);
        // console.log(outer);
    }
}
 
const newFunction =  new outerFunction("Hey Outer"); 

// newFunction("Hey Inner");

// newFunction("Hey Inner");

// newFunction("Hey Inner");

// newFunction("Hey Inner");

function createGame() {
    let score = 0;

function increaseScore(points){
    score+=points;
    console.log(score);
}

function decreaseScore(points){
    score-=points;
    console.log(score);
}

function getScore() {
    return score;
}
return {increaseScore, decreaseScore, getScore};
}


const game = createGame();
game.increaseScore(5);
game.decreaseScore(3);
console.log(game.getScore());