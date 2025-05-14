/*
Async - Make a function return the promise
Await - Make the Async function wait for promise
        Await only valid in Async function.
*/

function primarySchool(){
    return new Promise((resolve,reject) =>{
        const isPass = false;
        if(isPass){
           resolve("You have passed");
        } else{
           reject("you have failed");
        }
    })
}

function engineering(){
    return new Promise((resolve, reject) => {
        const isgraduated = false;
        if(isgraduated){
            resolve("Congratulation you have graduated");
        }else{
            reject("Not gratuated");
        }
    })
}

function job() {
    return new Promise((resolve,reject)=>{
        const isSelected = true;
        if(isSelected){
           resolve("you have selected");
        }else{
            reject("you are not selected");
        }
    })
}

async function education() {
    try{
        const qualification = await primarySchool();
        console.log(qualification);
    }catch(error){
        console.log(error);
    }

    try{
        const qualification1 = await engineering();
        console.log(qualification1);
    }catch(error){
        console.log(error);
    }

    try{
        const qualification2 = await job();
        console.log(qualification2);
    }catch(error){
        console.log(error);
    }
}

education();