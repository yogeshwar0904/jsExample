/*
Passing a function as argument to some other fuction.
*/

function someOther(vehicle){
    const car = {
        name:"Ertica",
        color:"Metalic Grey"
    }
   console.log(Object.getPrototypeOf(car));
   vehicle(car);
}

function vehicle(car) {
    console.log("Hey I'm the car");
    console.log(car.name);
}
//someOther(vehicle);

