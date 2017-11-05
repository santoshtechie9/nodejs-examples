
// object literal is one of the way of creating and object in nodejs
// here you will learn create an object using object literal

var person = {
  
  firstName: 'Santosh',
  lastName: 'Kumar',
  
  greet: function(){
    console.log('firstName =' + firstName + "lastName = " + lastName);
  }

}

// access the properties by objectname.propertyname
console.log(person.firstName);
console.log(person.lastName);

// invoke the method by objectname.methodname();
person.greet();
