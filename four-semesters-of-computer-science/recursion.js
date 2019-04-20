let wr = (msg='--------------') => console.log(`${msg}`);

function basicRecursion(max, current) {
    if(current > max) return //Base case (when do we stop)
    wr(current);
    basicRecursion(max, current+1);
}

basicRecursion(10, 1);
wr();
wr();