
/*
 Although the variable 'who' is defined after the child 
 function in the parent scope, on execution the child 
has access to 'who'. That is because on execution the child 
looks in its own scope for 'who', does not find it and so looks
into its parent scope and does.
*/

const findSomeone = () => {
    const speak = () => {
        console.log(who);
    };
    let who = 'Hello there professor plum!';
    return speak;
};

const someoneSpeak = findSomeone();
someoneSpeak();