
//function statement
function greet(){
    console.log("Hi, inside greet");
}
greet();

//funtions are first class. you can pass functions as arguments
function logGreeting(fn){
    fn();
}
logGreeting(greet);

//function expression
var greetMe = function(){
    console.log("Hi Santosh, Inside greetVar function expression");
}
greetMe();

//function expressions are first class
logGreeting(greetMe);

//you can use function expression on the fly
logGreeting(function(){
    console.log("Hi Santosh, Inside function expression on the fly");
})


