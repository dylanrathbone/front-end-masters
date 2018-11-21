/*
 Map will take an array, and for each of its elements,
 perform an action/transformation on each element returning
 a new array as the result.
*/

const weapons = ['candlestick', 'lead pipe', 'revolver'];

_.map(weapons, function(weapon){
    return `The ${weapon} is broken`;
});