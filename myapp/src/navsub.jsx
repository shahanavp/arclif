import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
// import ReactDOM from 'react-dom/client';
function Navsub() {
  return (
    <nav
      style={{
        backgroundColor: "white",
        padding: "3px",
        justifyContent: "space-around",
        display: "flex",
        border: "2px solid black",
        borderRadius: "10px 10px 10px 10px",
      }}
    >
      <Link to="/furniture1">
        <h6 style={{ textAlign: "center", color: "black" }}>Furniture</h6>
      </Link>

      <Link to="/sofarecliners">
        <h6 style={{ textAlign: "center", color: "black" }}>
          sofas & Recliners
        </h6>
      </Link>

      <Link to="/homedecor">
        <h6 style={{ textAlign: "center", color: "black" }}>Homedecor</h6>
      </Link>

      <Link to="/bedsmattresses">
        <h6 style={{ textAlign: "center", color: "black" }}>
          Beds & Mattresses
        </h6>
      </Link>

      <Link to="/lighting">
        <h6 style={{ textAlign: "center", color: "black" }}>Lighting</h6>
      </Link>

      <Link to="/carpets">
        <h6 style={{ textAlign: "center", color: "black" }}>Carpets</h6>
      </Link>

      <Link to="/gardenoutdoor">
        <h6 style={{ textAlign: "center", color: "black" }}>
          Garden & Outdoor
        </h6>
      </Link>

    </nav>
  );
}

export default Navsub;
