import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  //Create div container which contains a h1 container and 3 Pet containers
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    //invoke a Pet object and 'stamp it'
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatoo"
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Stray" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
