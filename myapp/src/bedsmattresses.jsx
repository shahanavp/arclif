import React from "react";
import Filter from "./filter";
import Header from "./Header";
import Navsub from "./navsub";
import Card from "./Card";
// import ReactDOM from 'react-dom/client';
function Bedsmattresses() {
  return (
    <div>
      <Header />
      <Navsub />
      <div className="p-3 d-flex">
        <Filter />
        <div>
          <div className="text-muted p-3">
          A mattress is a large, usually rectangular pad for supporting a lying person.
           It is designed to be used as a bed, or on a bed frame as part of a bed. Mattresses may 
           consist of a quilted or similarly fastened case, usually of heavy cloth, containing materials such
            as hair, straw, cotton, foam rubber, or a framework of metal springs. Mattresses may also be filled
             with air or water
          </div>
          <div className="p-3">
            <h3>BEDS & MATTRESSES</h3>
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

export default Bedsmattresses;