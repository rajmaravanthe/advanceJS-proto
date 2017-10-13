var animal = {
    legs: 4,
    food: "veg"
} // define an object. 


var rabit = {}

rabit.__proto__ = animal; // inherit using __proto

animal.name = "rabit";
animal.getName = function () { // create a method to get name
    return this.name;
}

console.log("name of the animal : "+ rabit.getName());
