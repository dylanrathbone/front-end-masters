const _ = {};

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];



_.map = function(list, callback) {
    let array = [];
    list.forEach(element => {
        array.push(callback(element));
    });
    return array;
}

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

_.filter = function(list, callback) {
    let buffer = [];
    _.each(list, function(v, i, list) {
        if(callback(v, i, list)) {
            buffer.push(v);
        }
    });
    return buffer;
}

let filteredList = _.filter(videoData, function(element) {
    return element.present;
});

let presentOnly = _.map(filteredList, function(element) {
    return element.name;
});

presentOnly.forEach(function(element) {
    console.log(element);
});
