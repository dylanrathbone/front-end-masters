const _ = {};

/*
    Define _.each
*/
_.each = function(list, callback) {
    if(Array.isArray(list)) {
        for(let i = 0; i < list.length; i++) {
            callback(list[i], i, list)
        }
    } else {
        for(let property in list) {
            callback(list.property, property, list);
        }
    }
}

/* 
    Define _.map
*/
_.map = function(list, callback) {
    let array = [];
    _.each(list, function(v, i, list) {
        array.push(callback(v, i, list));
    })
    return array;
}

let myList = ['Dylan', 'Emma', 'Merlin'];

let newArray = _.map(myList, element => {
    return `${element} is rad`;
});

_.each(newArray, function(v, i, newArray) {
    console.log(v);
});