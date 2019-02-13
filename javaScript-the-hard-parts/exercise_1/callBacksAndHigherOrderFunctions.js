/*  
 * Challenge 1
 * Create a function addTwo that accepts one input and adds 2 to it.
 */
function addTwo(number) {
    return number + 2;
}
console.log(addTwo(2));
console.log(addTwo(10));

/*
 * Challenge 2
 * Create a function addS that accepts one input and adds an "s" to it.
 */
function addS(input) {
    return input + 's';
}
console.log(addS('pizza'));
console.log(addS('bagel'));

/*
 * Challenge 4
 * Create a function multiplyByTwo that accepts one number and multiplies it by 2
 */
function multiplyByTwo(num) {
    return num * 2;
}
console.log(multiplyByTwo(2));
console.log(multiplyByTwo(5));

/*
Challenge 3
Create a function called map that takes two inputs:
1. an array of numbers (a list of numbers)
2. a 'callback' function - a function that is applied 
to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that 
are the result of using the 'callback' function on each 
element of the input array.
*/
function map(list, callback) {
    let buffer = [];
    list.forEach(element => {
        buffer.push(callback(element))
    });
    return buffer;
}
console.log(map([2, 3, 4, 5], addS));
console.log(map([2, 3, 4, 5], addTwo));
console.log(map([2, 3, 4, 5], multiplyByTwo));

/*
Challenge 4
The function forEach takes an array and a callback, 
and runs the callback on each element of the array. 
forEach does not return anything.
*/
function forEach(array, callback) {
    for(let element in array) {
        callback(array[element]);
    }
}

var alphabet = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(`Calling forEach: ${alphabet}`); 

/*
 * Extension 2
 * The function reduce takes an array and reduces the elements 
 * to a single value. For example it can sum all the numbers, 
 * multiply them, or any operation that you can put into a function.
 */
 function reducer(numbers, operation, accumulator) {
    let reduction = accumulator;
    for(let i = 0; i < numbers.length; i++) {
        reduction = operation(numbers[i], reduction);
    }     
    return reduction;
 }

 function add(a, b) { return a + b; }; 
console.log(reducer([4, 1, 3], add, 0)); 

/*
 * Extension 3
 * Construct a function intersection that compares input 
 * arrays and returns a new array with elements found in 
 * all of the inputs. BONUS: Use reduce!
 */
 function intersection(list1, list2) {
     let intersection = [];
     list1.forEach(list1_element => {
         list2.forEach(list2_element => {
             if(list1_element === list2_element) {
                 intersection.push(list2_element);
             }
         })
     });
     return intersection
 }


 let matches = intersection([1,3,4,9,12,10,0,6], [2,3,9,12,6,0]);
 console.log(matches);

 /*
 * Extension 4
 * Construct a function union that compares input arrays and 
 * returns a new array that contains all elements. If there 
 * are duplicate elements, only add it once to the new array. 
 * Preserve the order of the elements starting from the first 
 * element of the first input array. BONUS: Use reduce!
 */

 function union(list1, list2) {
     let union = [];
     return union;
 }
