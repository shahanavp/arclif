import React from "react";
import Productview from "./productview";
import "./productview.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import items from "./arr";
import { width } from "@mui/system";
// import ReactDOM from 'react-dom/client';
function Productdetails() {
  return (
    <div className="d-flex flex-column" style={{ width: "100%" }}>
      <h3 className="text-center mt-4">PRODUCT DETAILS</h3>
      <table class="table mt-5 ">
  <thead>
    <tr>
      <th scope="col"> </th>
      <th scope="col">Name</th>
      <th scope="col">Rating</th>
      <th scope="col">View</th>
    </tr>
  </thead>
        {items.map((item, i) => {
          return (
            <Productview
              key={item.id}
              id={item.id}
              imgurl={item.imgurl}
              category={item.category}
              name={item.name}
              details={item.details}
              size={item.size}
            />
          );
        })}
      
</table>
      <div className="d-flex mt-4">
        <Link
          to="/addproduct"
          className="btn  col-2 mb-4 editbtn"
          style={{
            marginLeft: "50rem",
            backgroundColor: "grey",
            color: "white",
          }}
          type="button"
        >
          Add Product
        </Link>
        <Link
          to="/"
          class="btn col-1 mb-4 "
          style={{
            marginLeft: "1rem",
            backgroundColor: "grey",
            color: "white",
          }}
          type="button"
        >
          Exit
        </Link>
      </div>
    </div>
  );
}

export default Productdetails;
