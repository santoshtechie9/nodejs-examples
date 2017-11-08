

// person is a object literal
// this is just one way of build object. Object literal is the fasest way of build object.
// when there are lot of properties and methods you can quickly create an object using literals.
var person = {
    firstName : "Santosh",
    lastName : "Kumar",

    greet : function() {
        console.log("Hello, " + this.firstName  +" "+ this.lastName);
    }
};


// access the properties by objectname.propertyname
console.log(person.firstName);
console.log(person.lastName);

// Alternatively you can also access the properties and methods of an object using their names.
console.log("firstName = " + person['firstName']);

// you can access the properties of an object with a dot
person.greet();
