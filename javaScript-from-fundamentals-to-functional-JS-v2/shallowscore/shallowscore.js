const _ = {};

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

_.map = function(list, callback) {
    let array = [];
    list.forEach(element => {
        array.push(callback(element));
    });
    return array;
}

_.filter = function(list, callback) {
    let buffer = [];
    _.each(list, function(v, i, list) {
        if(callback(v, i, list)) {
            buffer.push(v);
        }
    });
    return buffer;
}

export function shallowScore() {
    return _;
}