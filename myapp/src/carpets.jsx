import React from "react";
import Filter from "./filter";
import Header from "./Header";
import Navsub from "./navsub";
import Card from "./Card";
// import ReactDOM from 'react-dom/client';
function Carpets() {
  return (
    <div>
      <Header />
      <Navsub />
      <div className="p-3 d-flex">
        <Filter />
        <div>
          <div className="text-muted p-3">
          A carpet is a textile floor covering typically consisting of an upper layer of pile attached
           to a backing. The pile was traditionally made from wool, but since the 20th century, synthetic 
           fibers such as polypropylene, nylon or polyester are often used, as these fibers are less expensive
            than wool. The pile usually consists of twisted tufts that are typically heat-treated to maintain 
            their structure. The term carpet is often used in a similar context to the term rug, but rugs are 
            typically considered to be smaller than a room and not attached to the floor.
          </div>
          <div className="p-3">
            <h3>Carpets</h3>
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

export default Carpets;