
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


