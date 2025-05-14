/*
Promise is a Object.
Initially promise Object is created.
we have 
    Promise state
       inital:Pending   Final: fullFilled
    Promise Result
       inital:undefined   Final: exact output
    PromiseFullfilledReaction
       handler
    PromiseRecjectReaction

    PromiseIsHandled
    initial:false Final: true

*/

new Promise((resolve, reject) => {
console.log("Started");
resolve(2)
}).then(result => console.log(result*2));
console.log("ended");