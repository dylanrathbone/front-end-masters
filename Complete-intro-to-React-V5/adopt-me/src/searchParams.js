import React, { useState } from "react";

const SearchParams = () => {
  /*
   * The 'useState' function below always returns an array (1st element is state, 2nd is updated function) hence the array assignment i.e. where
   * we destructure the useState response into the array [location, setLocation]
   * The const below is a Hook. ALL Hooks begin with 'use'
   */

  const [location, setLocation] = useState("Seattle, WA"); //Seattle, WA is the Default state

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
