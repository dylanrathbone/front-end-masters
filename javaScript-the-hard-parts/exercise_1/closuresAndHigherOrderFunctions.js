
 /*
 * Challenge 1
 * Create a function createFunction that creates 
 * and returns a function. When that created 
 * function is called, it should print "hello".
 */
 function createFunction() {
     function sayHello() {
         console.log("Hello!")
     }
     return sayHello;
 }

 let hello = createFunction();
 hello();

 /*
  * Challenge 2
  * Create a function createFunctionPrinter 
  * that accepts one input and returns a function. 
  * When that created  function is called, it should 
  * print out the input that was used when the function 
  * was created.
  */

  function createFunctionPrinter(){
      function printInput(input) {
          console.log(`This was your input: ${input}`);
      }
      return printInput;
  }

  let callPrinter = createFunctionPrinter();
  callPrinter("Closures are interesting...");

  /*
   * Challenge 3
   * Examine the code for the outer function. 
   * Notice that we are returning a function and that 
   * function is using variables that are outside of 
   * its scope. Uncomment those lines of code. Try to 
   * deduce the output before executing.
   */
  function outer() {
    var counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter () {
      counter ++;
      console.log('counter', counter);
    }
    return incrementCounter;
  }
  
  var willCounter = outer();
  var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.
willCounter(); //Will return 1
willCounter(); //Will return 2
willCounter(); //Will return 3

jasCounter();  //Will return 1;
willCounter(); //Will return 4;

/*
 * Challenge 4
 * Now we are going to create a function addByX 
 * that returns a function that will add an input 
 * by x.
 */
function addByX(adderVal) {
    function getSumOfTwoNumbers(number) {
        console.log(number + adderVal);
    }
    return getSumOfTwoNumbers;
}

var addByTwo = addByX(2)
addByTwo(1); //should return 3
addByTwo(2); //should return 4
addByTwo(3); //should return 5

var addByThree = addByX(3);
addByThree(1); //should return 4
addByThree(2); //should return 5

var addByFour = addByX(4);
addByFour(4); //should return 8
addByFour(10); //should return 14

/*
 * Extension: Challenge 5
 * Write a function once that accepts a callback 
 * as input and returns a function. When the returned 
 * function is called the first time, it should call 
 * the callback and return that output. If it is called 
 * any additional times, instead of calling the callback 
 * again it will simply return the output value from the 
 * first time it was called.
 */
function once(callback) {
    function returnMe() {
        callback();
    }
    return returnMe;
}

function aCallBack() {
    console.log("Callback....");
}

let returnedFunction = once(aCallBack);
returnedFunction();
