
// here you will learn how to object properties and different ways of accessing them.

// object literal
var car ={
    brandName:'Jeep',
    year: 2017,
    miles: 9,
    getCarDetails : function(){
        return "brandName="+this.brandName+' '+"year="+this.year+' '+"miles="+this.miles
    }
}

// access the property by using a dot
console.log(car.brandName);

// access the property by passing property name as argument
console.log(car['brandName']);

// store the property name in a variable and pass it as an argument
var propName = 'brandName'; 
console.log(car[propName]);

// access methods
var str = car.getCarDetails();
console.log(str);