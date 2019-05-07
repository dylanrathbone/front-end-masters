/*
 * Rather than duplicate functional behaviour across object types
 * Use Object.prototype as a 'store' for shared functionality. 
 */

function Dog(breed, age) {
    this.breed = breed;
    this.age = age;
}

Dog.prototype.getBreed = function() {
    console.log(`Dog breed is: ${this.breed}`)
}

Dog.prototype.getAge = function() {
    console.log(`Dog age is: ${this.age}`)
}

Dog.prototype.makeBark = function() {
    if(this.breed == "Huskey") {
        console.log("Woof! Woof")
    } else {
        console.log("Bow wow")
    }
}

let huskey = new Dog("Huskey", "3");
let cocker = new Dog("Cocker Spaniel", "2")

huskey.getAge();
huskey.getBreed();
huskey.makeBark()

cocker.getAge();
cocker.getBreed();
cocker.makeBark();