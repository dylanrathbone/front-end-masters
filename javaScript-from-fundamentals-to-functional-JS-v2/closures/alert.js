/*
    In the example below for each call of 
    'funcAlert()' we get an alert box with 
    the 'count' incremented.

    myAlert ultimately returns a function. 
    When funcAlert() is executed the alerter 
    function is executed and popped off the 
    call stack, however 'x' and 'count' are 
    not. They remain on the call stack. 
    
    This examples the complexities of scope 
    and caveats of the call stack.
*/

const myAlert = () => {
    const x = "Help I think I have found a clue!"
    let count = 0;
    const alerter = () => {
      alert(`${x} ${++count}`);
    };
  return alerter;
  };

const funcAlert = myAlert();

funcAlert();