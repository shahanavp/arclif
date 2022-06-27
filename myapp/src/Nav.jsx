import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import demo from "./demo";
import Card from "./Card";
import "./Nav.css";

function Nav() {
  return (
    <nav
      style={{
        backgroundColor: "white",
        padding: "3px",
        justifyContent: "space-around",
        display: "flex",
        border: "2px solid black",
        borderRadius: "20px 20px 20px 20px",
        
      }}
    >
      <Link to="/kitchenware">
        <img
         src="assets/photo-1556185781-a47769abb7ee.jpg"
          style={{ width: "7rem", height: "7rem", padding: "5px" }}
        />
        <h6 style={{ textAlign: "center", color: "black"}}>kitchenware</h6>
      </Link>

      <Link to="/furniture">
        <img
        src="assets/Wakefit-Kent-Coffee-Table.jpg"
          
          style={{ width: "7rem", height: "7rem", padding: "5px" }}
        />
        <h6 style={{ textAlign: "center", color: "black" }}>Furniture</h6>
      </Link>

      <Link to="/homedecor">
        <img
         
          src="assets/fl34-10001_13_.webp"
          
          style={{ width: "7rem", height: "7rem", padding: "5px" }}
        />
        <h6 style={{ textAlign: "center", color: "black" }}>Home decor</h6>
      </Link>

      <Link to="/furnishing">
        <img
          src="assets/54c0d258b4ada_-_07-hbx-mann-o-print-curtains-shubel-0712-s2.webp"
          style={{ width: "7rem", height: "7rem", padding: "5px" }}
        />
        <h6 style={{ textAlign: "center", color: "black" }}>Furnishing</h6>
      </Link>

      <Link to="/gardening">
        <img
         src="assets/indoor-plants-1582229387.webp"
         
          style={{ width: "7rem", height: "7rem", padding: "5px" }}
        />
        <h6 style={{ textAlign: "center", color: "black" }}>Gardening store</h6>
      </Link>

      {/* <Link to="/demo" ><img src="assets/images1.jpg" 
        style={{width:'7rem',height:'7rem',padding:'5px'}}/>
        <h6 style={{textAlign:'center'}}>Furnishing</h6>
        </Link> */}

      {/*<img src="assets/indoor-plants-1582229387.webp" style={{width:'10rem',height:'10rem',padding:'5px'}}></img> 
         <img src="assets/skybird-tables-ornate-round-golden-coffee-table-set-of-2-31865288622246_1024x1024.jpg" style={{width:'10rem',height:'10rem',padding:'5px'}}></img>
         <img src="assets/Wakefit-Kent-Coffee-Table.jpg" style={{width:'10rem',height:'10rem',padding:'5px'}}></img>
         <img src="assets/54c0d258b4ada_-_07-hbx-mann-o-print-curtains-shubel-0712-s2.webp" style={{width:'10rem',height:'10rem',padding:'5px'}}></img>
         <img src="assets/fl34-10001_13_.webp" style={{width:'10rem',height:'10rem',padding:'5px'}}></img>
         <img src="assets/images1.jpg" style={{width:'10rem',height:'10rem',padding:'5px'}}></img>*/}
    </nav>
  );
}

export default Nav;
