import { margin } from "@mui/system";
import React, { useState, useEffect, useContext } from "react";
import { createContext } from "react";
import ReactStars from "react-rating-stars-component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import items from "./arr";
import { UserContext } from "./context/context";
// import ReactDOM from 'react-dom/client';


function Buy() {
  const { id } = useParams();
  const [data, setData] = useState([]);
 const {commondata}=useContext(UserContext)


  var ab = "";

  // id: "", imgurl: "", name: "", details: ""

  useEffect(() => {
    console.log("buy", id);
    console.log("common data :", commondata);
    ab = commondata.filter((item) => {
      return item.id == id;
    });
    // ab=items[id]

    setData(ab);

    // setData({ id: ab.id, imgurl: ab.imgurl, name: ab.name, details: ab.details })

    console.log("show", ab);
    console.log("data", data);
  }, []);

  //item.id==id?setState(...item):setState('')
  return (
    <div>
     
      <div className="nav" style={{ width: "80rem", height: "1rem" }}></div>
      <div className="d-flex" style={{ padding: "2rem" }}>
        <img
          src={ab.urls.full}
          alt="image unavailable"
          style={{ width: "35rem", height: "30rem" }}
        />
        <div>
          <div
            className="d-flex flex-column  card col-md-6 "
            style={{ width: "75rem", height: "20rem", margin: "20px" }}
          >
            <div className="card-body">
              <h2 className="card-title">{ab.alt_description}</h2>
              <p className="card-text" style={{ lineHeight: "1rem" }}>
                special price
              </p>
              <p style={{ fontSize: "35px", lineHeight: "1rem" }}>
                {ab.likes}
              </p>
              <ReactStars size={20} isHalf={true} />
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
          <div className="flex-column " style={{ padding: "0px 200px" }}>
            <Link to="/cart" className="btn btn-dark  col-4 ">
              Add to cart
            </Link>
          </div>
        </div>
      </div>
     
    </div>
    /*<div class="d-grid gap-2 col-6 mx-auto">
    <button class="btn btn-primary" type="button">Button</button>
    <button class="btn btn-primary" type="button">Button</button>
    </div>*/
  );
}

export default Buy;
