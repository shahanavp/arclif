import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams,
  } from "react-router-dom";
// import ReactDOM from 'react-dom/client';
function Navsub()
{
    return(
    
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
        <Link to="/kitchenware">
          <h6 style={{ textAlign: "center", color: "black"}}>kitchenware</h6>
        </Link>
  
        <Link to="/furniture">
          <h6 style={{ textAlign: "center", color: "black" }}>Furniture</h6>
        </Link>
  
        <Link to="/homedecor">
          <h6 style={{ textAlign: "center", color: "black" }}>Home decor</h6>
        </Link>
  
        <Link to="/furnishing">
          <h6 style={{ textAlign: "center", color: "black" }}>Furnishing</h6>
        </Link>
  
        <Link to="/gardening">
          <h6 style={{ textAlign: "center", color: "black" }}>Gardening store</h6>
        </Link>
     </nav>
    )
}

export default Navsub;