import React from "react";
import Filter from "./filter";
import Header from "./Header";
import Navsub from "./navsub";
import Card from "./Card";
// import ReactDOM from 'react-dom/client';
function Sofarecliners() {
  return (
    <div>
      <Header />
      <Navsub />
      <div className="p-3 d-flex">
        <Filter />
        <div>
          <div className="text-muted p-3">
          The most common types of couches include the two-seater, sometimes referred to as a loveseat, and the 
          sofa. The loveseat is designed for seating two people, while the sofa has more than two cushion seats.
           A sectional sofa, often just referred to as a "sectional", is formed from multiple sections (typically
            two, three, and four) and usually includes at least two pieces which join at an angle of 90 degrees or
             slightly greater. Sectional sofas are used to wrap around walls or other furniture.
          </div>
          <div className="p-3">
            <h3>SOFAS & RECLINERS</h3>
            <div className="d-flex flex-row bd-highlight mb-3">
                <div className="font-weight-bold p-2">SORT BY</div>
              <a className="p-2 bd-highlight text-dark">Popularity</a>
              <a className="p-2 bd-highlight text-dark">Price low-high</a>
              <a className="p-2 bd-highlight text-dark">Price high-low</a>
              <a className="p-2 bd-highlight text-dark">Newest first</a>
              <hr className="dropdown-divider" />
            </div>
          </div>
          <div className="p-4 mt-1">
            <Card />
          </div>

        </div>


      </div>
    </div>
  );
}

export default Sofarecliners;