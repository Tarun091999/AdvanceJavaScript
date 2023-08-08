
// High Order Function 

// High order function are thoe function that take function as the parameter or return the function from function 


//Example 1 : 

function Greet(val)
{
    console.log("Greet with value", val());
}

//Example 2 :
function Greet()
{
    return function ()
    {
       return"Greet without value!!!";
    }
}

function GoodMorning ()
{
    return "Good Morning"
}

Greet(GoodMorning);

//There is no function overloading in java script due to hoisting
// only example 2 i running in our case

let greeting = Greet();
console.log(greeting());



//------------------------------- Constructor ------------------------

// function that includes this keyword is simply known as comstructor , constructor is used when we need to creae identical elements with same properties

// iife -> Immediatly invoked function expression


// const a = (function (){

//     var amount = 200
//     return {
//         getter: function (){
//             console.log(amount)
//         },
//         setter: function (val)
//         {
//             amount=val
//         }
//     }
// })();
// //why this give undefined?
// //This is because amount is now a private field
// console.log(a.amount)

// //it gives the value of the private field 
// console.log(a.getter())

// //it set the value to the private field 
// console.log(a.setter(20));


// console.log(a.getter())

//------------ Proto Inheritance --------------


// what is prototype?
// Prototype is the addition features that are provided by the java script all object have the prototypes i.e. helper methods like we need to find the length of the array we can get it with the help of .length()


const obj ={
    name : "Tarun"
}

console.log(obj);



//Prototype Inheritance 

const car = {
    hasFourTire : true,
    hasAccelerator : true,
    hasBrake :true,
}

const sportsCar = {
    seatCapacity : 2,
    speed : "300km/h"
}


//sports car also have the feature of car like it has four tire and so on we need to inherit thecar obj in sport car

sportsCar.__proto__=car
// now sport car have the feature of car 
console.log(car)
console.log(sportsCar)









