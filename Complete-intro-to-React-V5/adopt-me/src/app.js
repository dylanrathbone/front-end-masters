import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  /*
    The code below (commented out) is what was originally written, its 
    pure react, using the react library API's...
    */

  //Create div container which contains a h1 container and 3 Pet containers
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt me!"),
  //   //invoke a Pet object and 'stamp it'
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Cockatoo"
  //   }),
  //   React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Stray" })
  // ]);

  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <SearchParams />
    </div>
  );
};

//Render the App component into the root DOM node.
render(<App />, document.getElementById("root"));
