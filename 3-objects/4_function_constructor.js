
// here you will learn how to create objects using function constructor

// constructor
function person(firstName,lastName,age,eyeColor){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.eyeColor=eyeColor;
}

var father = new person('John','Doe','30','black');

console.log("firstName="+father.firstName);