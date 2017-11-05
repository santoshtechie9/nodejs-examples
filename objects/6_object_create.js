
// here you will learn how create an object using the object.create function.
// steps
// 1.create an object literal
// 2.pass the object literal as an argument to object.create(objectLiteral) method

var person = {
  
  firstName : '',
  lastName : '',
  
  greet: function(){
    console.log("firstName=" + this.firstName +' '+ "lastName=" + this.lastName);
  }

}

var john = Object.create(person);
john.firstName='John';
john.lastName='Doe';
john.greet();

var jane = Object.create(person);
jane.firstName='Jane';
jane.lastName='Doe';
jane.greet();
