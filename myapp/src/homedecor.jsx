import React from "react";
import Filter from "./filter";
import Header from "./Header";
import Navsub from "./navsub";
import Card from "./Card";
// import ReactDOM from 'react-dom/client';
function Homedecor() {
  return (
    <div>
      <Header />
      <Navsub />
      <div className="p-3 d-flex">
        <Filter />
        <div>
          <div className="text-muted p-3">
            Let your home do the talking of your exquisite taste and impeccable
            style. Transform your home with our beautiful range of Home Decor
            Items like wallpapers, candles, paintings, showpieces, wall clocks,
            photo frames and more. Compliment each corner of your home with
            elegance and royalty with our Home Decor products. Glam up your
            interior with the perfect piece of decor item from our collection of
            premium brands. Explore and experiment with the four walls of your
            home with themes ranging from modern, traditional to vintage and
            retro.
          </div>
          <div className="p-3">
            <h3>HOME DECOR</h3>
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

export default Homedecor;
