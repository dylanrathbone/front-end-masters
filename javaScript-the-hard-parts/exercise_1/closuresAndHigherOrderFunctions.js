
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
