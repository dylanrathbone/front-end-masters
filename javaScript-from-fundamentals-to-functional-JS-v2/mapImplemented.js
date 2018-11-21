/*
 A custom implementation of the 'map' function provided
 by underscorejs. 
*/

const _ = {};

_.map = function(list, callback) {
    let array = [];
    list.forEach(element => {
        array.push(callback(element));
    });
    return array;
}

let myList = ['Dylan', 'Emma', 'Merlin'];

_.map(myList, function(element) {
    return `${element} is cool`;
});