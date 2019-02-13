
 /*
 * Extension 1
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