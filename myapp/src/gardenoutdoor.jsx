import React from "react";
import Filter from "./filter";
import Header from "./Header";
import Navsub from "./navsub";
import Card from "./Card";
// import ReactDOM from 'react-dom/client';
function Gardenoutdoor() {
  return (
    <div>
      <Header />
      <Navsub />
      <div className="p-3 d-flex">
        <Filter />
        <div>
          <div className="text-muted p-3">
          A garden is a planned space, usually outdoors, set aside for the cultivation, 
          display, and enjoyment of plants and other forms of nature. The single feature 
          identifying even the wildest wild garden is control. The garden can incorporate
           both natural and artificial materials.
          </div>
          <div className="p-3">
            <h3>GARDEN & OUTDOOR</h3>
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

export default Gardenoutdoor;