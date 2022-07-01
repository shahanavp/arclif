import React from "react";
import Filter from "./filter";
import Header from "./Header";
import Navsub from "./navsub";
import Card from "./Card";
// import ReactDOM from 'react-dom/client';
function Lighting() {
  return (
    <div>
      <Header />
      <Navsub />
      <div className="p-3 d-flex">
        <Filter />
        <div>
          <div className="text-muted p-3">
          Lighting or illumination is the deliberate use of light to achieve practical or aesthetic effects.
          Proper lighting can enhance task performance, improve the appearance of an area, or have positive 
          psychological effects on occupants.Indoor lighting is usually accomplished using light fixtures,
           and is a key part of interior design. Lighting can also be an intrinsic component of landscape projects.
          </div>
          <div className="p-3">
            <h3>Lighting</h3>
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

export default Lighting;