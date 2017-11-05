
// here you will learn how create an object using the object.create function.
// steps
// 1.create an object literal
// 2.pass the object literal as an argument to object.create(objectLiteral) method

var person = {
  
  firstName : '',
  secondName : '',
  
  greet: function(){
    console.log("firstName=" + firstname + "lastName=" + lastName);
  }

}

var john = new Object.create(person);
var jane = new Object.create(person);

