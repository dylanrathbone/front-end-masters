function countClues() {
    var n = 0;
    return {
        count: function() {return n++},
        reset: function() {return n = 0}
    }
}
const counter = countClues();
counter.count();