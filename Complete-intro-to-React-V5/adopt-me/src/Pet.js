import React from "react";

export default function Pet({ name, animal, breed }) {
  /*
    The code below (commented out) is what was originally written, its 
    pure react, using the react library API's...

    return React.createElement("div", {}, [
      React.createElement("h1", {}, name),
      React.createElement("h2", {}, animal),
      React.createElement("h3", {}, breed)
    ]);
    */

  /*
   * The code below is the new code that replaced the above commented out code. It is JSX code
   * and is much more readable. Babel transpiles this code into the code above, there is no
   * magic going on here
   *
   * This is much more easier to reason with and think about, as opposed to mentally thinking
   * about the HTML thats needed and writing react api code, we simply write JSX!
   */

  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h3>{breed}</h3>
    </div>
  );
}
