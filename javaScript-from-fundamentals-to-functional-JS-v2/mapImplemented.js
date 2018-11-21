/*
    A custom implementation of the 'map' function provided
    by underscorejs. 
*/


/*
    Implementation of map
*/
const _ = {};

_.map = function(list, callback) {
    let array = [];
    list.forEach(element => {
        array.push(callback(element));
    });
    return array;
}

/*
    Call map implementation
*/
let myList = ['Dylan', 'Emma', 'Merlin'];

let newArray = _.map(myList, element => {
    return `${element} is cool`;
});

newArray.forEach(element => {
    console.log(element);
})