/*
 A custom implementation of the 'each' function provided
 by underscorejs. 
*/

const _ = {};

/*
 Define _.each
*/
_.each = function(list, callback) {
    if(Array.isArray(list)) {
        for(let i = 0; i < list.length; i++) {
            /*
                Execute call back, passing it:
                1. The current array value
                2. The current array index
                3. The list itself
            */
            callback(list[i], i, list)
        }
    } else {
        for(let property in list) {
            callback(list.property, property, list);
        }
    }
}
/*
 Call ._each
*/
_.each(['Sally', 'John', 'Peter'], function(name, i, list) {
    if(list[i + 1]) {
        console.log(name, 'is younger than', list[i] + 1);
    } else {
        console.log(name, 'is the oldest');
    }
});