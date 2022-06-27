import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import ReactDOM from 'react-dom/client';
import Pricedetails from "./pricedetails";
function Cart() {
  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount((prevCount) => count - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <div className="nav" style={{ width: "80rem", height: "1rem" }}></div>

      <div
        className="d-flex flex-row "
        style={{ height: "20rem", margin: "20px" }}
      >
        <div
          className="p-2 bd-highlight card text-bg-light mb-3  "
          style={{ width: "50rem", height: "25rem" }}
        >
          <div className="card-header">
            {" "}
            <b>My Cart</b>
          </div>

          <div className="row g-0 bg-light mt-2"style={{margin:"2rem"}}>
            <div className="col-md-3">
              <img
                src="assets/indoor-plants-1582229387.webp"
                className="img-fluid rounded-start"
                style={{ margin: "1rem", width: "10rem", height: "10rem" }}
                alt=" image not available"
              />
              <div className="float-start d-flex flex-column align-items-center  ">
                <small className="text-muted mb-3">Set the quantity</small>

                <div className="btn-group d-flex justify-content-between mb-2">
                  <button
                    type="button"
                    className="btn-sm btn-dark"
                    onClick={decrementCount}
                  >
                    -
                  </button>
                  <span style={{ margin: "0 1rem" }}>{count}</span>
                  {/* <input type="text" placeholder='1' size="2">{prevCount}</input> */}
                  <button
                    type="button"
                    className="btn-sm btn-dark"
                    onClick={incrementCount}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="d-flex">
              <div className="card-body justify-content-end">
                <h5 className="card-title">Name of the product</h5>
                <p className="card-text">
                  <small className="text-muted">Special price</small>
                </p>
                <p style={{ fontSize: "35px", lineHeight: "1rem" }}>₹499</p>
              </div>

              <div className="mt-5 " style={{ marginLeft: "10rem" }}>
                <div className="close btn-lg " aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </div>
              </div>
            </div>


          </div>


        </div>

        <div style={{ margin: "1rem" }}></div>

        <div>
          <div>
            {" "}
            {/*className="p-2 bd-highlight card border " style={{ width: "25rem", height: "19rem" }} */}
            <Pricedetails />
            {/* <div className="card-header bg-transparent border=1px"><b>PRICE DETAILS</b></div>
    <div className="card-body ">
    <p className="card-text"> Price</p>
    <p>Discount</p>
    <p>Delivery</p>
    </div>
    <div className="card-footer bg-transparent border=1px"><b>Total Amount :</b></div>
    </div> */}
          </div>

          <Link
            to="/order"
            className="btn btn-dark "
            style={{ margin: "30px", padding: "5px 100px" }}
          >
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
