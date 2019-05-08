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


/*
 * Above re-written for modern JS. We use a style here
 * similar to other OO languages. What is happening here 
 * is exactly the same as above, only it could be considered
 * more readable and better practice
 */

class Dog {
    constructor(breed, age) {
        this.breed = breed;
        this.age = age;
    }

    getBreed() {
        console.log(`Dog breed is: ${this.breed}`)
    }

    getAge() {
        console.log(`Dog age is: ${this.age}`)
    }

    makeBark = function() {
        if(this.breed == "Huskey") {
            console.log("Woof! Woof")
        } else {
            console.log("Bow wow")
        }
    }
}

let greatDane = new Dog("Great Dane", "12");
let irishWolfHound = new Dog("Irish Wolf Hound", "2")

greatDane.getAge();
greatDane.getBreed();
greatDane.makeBark()

irishWolfHound.getAge();
irishWolfHound.getBreed();
irishWolfHound.makeBark();