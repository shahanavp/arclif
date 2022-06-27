import React from "react";
import items from "./arr";
import ReactStars from "react-rating-stars-component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
// import ReactDOM from 'react-dom/client';
function Vendorsingle() {
  return (
    <div>
      <div className="nav" style={{ width: "80rem", height: "1rem" }}></div>
      <div className="d-flex" style={{ padding: "2rem" }}>
        <img
          src="assets/15535d82d16bc16f51f59a23acb1f050.jpg"
          alt="image unavailable"
          style={{ width: "35rem", height: "30rem" }}
        />
        <div className="d-flex flex-column">
          <div
            className="d-flex flex-column  card col-md-6 "
            style={{ width: "75rem", height: "20rem", margin: "20px" }}
          >
            <div className="card-body">
              <h2 className="card-title">Name of the product</h2>
              <p className="card-text" style={{ lineHeight: "1rem" }}>
                special price
              </p>
              <p style={{ fontSize: "35px", lineHeight: "1rem" }}>₹499</p>

              <p className="fs-4">
                <b>Available offers</b>
              </p>
              <li className="lh-1">
                No Cost EMI : Avail No Cost EMI on select cards for orders above
                ₹3000
              </li>
              <li>
                Bank Offer: 5% Instant Discount on HSBC Cashback Card
                Transactions{" "}
              </li>
            </div>
          </div>
          <div className="mt-5">
            <Link
              to="/addproduct"
              class="btn  mb-4 "
              style={{
                marginLeft: "5rem",
                backgroundColor: "grey",
                color: "white",
               padding:"0.5rem 4rem"
               
              }}
              type="button"
            >
              edit
            </Link>
            <Link
              to="/"
              className="btn mb-4 "
              style={{
                marginLeft: "1rem",
                backgroundColor: "grey",
                color: "white",
                padding:"0.5rem 4rem"
              }}
              type="button"
            >
              remove
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vendorsingle;
