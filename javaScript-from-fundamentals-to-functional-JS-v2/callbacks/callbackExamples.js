/*
    Example 1:
*/
const ifElse = (condition, isTrue, isFalse) => {
    return condition ? isTrue() : isFalse();
};

ifElse(true,
    () => {console.log(true);},
    () => {console.log(false);}
);

/*
    Example 2:
*/
var increment = function(n) {
    return n + 1;
}

var square = function(n) {
    return n * n;
}

var doMathSoIDontHaveTo = function(n, callback) {
    return callback(n);
}

console.log(`Increment called: ${doMathSoIDontHaveTo(3, increment)}`);
console.log(`Square called : ${doMathSoIDontHaveTo(5, square)}`);

/*
    Translate Example 2 (above) into ES6 i.e. arrow notation
*/
var incrementEs6 = (n) => { return n + 1; }

var squareEs6 = (n) => { return n * n; }

var doMathSoIDontHaveToEs6 = (n, callback) => { return callback(n); }

console.log(`Increment called (ES6): ${doMathSoIDontHaveToEs6(3, increment)}`);
console.log(`Square called (ES6): ${doMathSoIDontHaveToEs6(5, square)}`);

/*
    Different take on ES6 syntax
*/
var incrementEs6V1 = (n) =>  n + 1; 

var squareEs6V1 = (n) =>  n * n; 

var doMathSoIDontHaveToEs6V1 = (n, callback) => callback(n); 

console.log(`Increment called (ES6V1): ${doMathSoIDontHaveToEs6V1(3, increment)}`);
console.log(`Square called (ES6V1): ${doMathSoIDontHaveToEs6V1(5, square)}`);