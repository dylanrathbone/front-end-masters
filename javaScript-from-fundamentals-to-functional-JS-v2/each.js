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
 Call ._each
*/
_.each(['Sally', 'John', 'Peter'], function(name, i, list) {
    if(list[i + 1]) {
        console.log(name, 'is younger than', list[i] + 1);
    } else {
        console.log(name, 'is the oldest');
    }
});