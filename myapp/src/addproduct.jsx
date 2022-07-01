import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Vendorheader from "./vendorheader";
import { toast } from "react-toastify";
// import ReactDOM from 'react-dom/client';
function Addproduct() {
  const [pname, setPname] = useState("");
  const [image, setImage] = useState(""); //image name
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [file,setFile]=useState(""); //file storage

  const product = {
    vendor_id:localStorage.getItem("_ID"),
    productname:pname,
    productimage: image,
    productcategory: category,
    productprice: price,
    productsize: size,
  };

console.log("Product data : ",product);

  const handlePname = (e) => {
    setPname(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.files[0].name);
    setFile(e.target.files[0])
    console.log("filename : ",e.target.files[0].name);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleSize = (e) => {
    setSize(e.target.value);
  };
  const addproduct = () => {

    if(file){
const data =new FormData();
const filename=file.name;
data.append("name",filename);
data.append("file",file)

console.log(`filedata: ${data}`);
axios.post(`/upload/${product.vendor_id}`,data)
    }else{
      toast.error("choose image !!")
    }
    axios
      .post("http://localhost:5001/addproduct", { product: product })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });


  };
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
  headers.append("Access-Control-Allow-Credentials", "true");

  headers.append("GET", "POST", "OPTIONS");
  return (
    <div>
      <Vendorheader />
      {/* <div className="nav" style={{ width: "80rem", height: "1rem" }}></div> */}

      <div className="mt-5" style={{ marginLeft: "300px" }}>
        <form>
          <div className="row mb-3">
            <label for="inputname" className="col-sm-2 col-form-label">
              {" "}
              Product Name
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="inputname"
                onChange={handlePname}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className=" col-sm-2 col-form-label " for="inputGroupFile02">
              Product Image
            </label>
            <div className="input-group col-sm-6">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile02"
                onChange={handleImage}
              />
            
            </div>
          </div>

          <div className="row mb-3 ">
            <label for="category" className="col-sm-2 col-form-label">
              {" "}
              Product category
            </label>
            <div className="col-sm-6">
              <div class="dropdown ">
                <select
                  className="input-group"
                  name="category"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onChange={handleCategory}
                  style={{ height: "2.3rem" }}
                >
                  <option value="beds and mattresess">Beds & mattresess</option>
                  <option value="Garden and outdoor">Garden & outdoor</option>
                  <option value="Sofas and recliners">Sofas & recliners</option>
                  <option value="Home Decor">Home decor</option>
                  <option value="furniture">Furniture</option>
                  <option value="lightning">Lighting</option>
                  <option value="carpet">Carpet</option>

                  {/* <option value="furniture">Beds</option>
    <option value="furniture">Mattresses</option>
    <option value="furniture">Dining set</option>
    <var><option value="furniture">Office chairs</option></var>
    <var><option value="furniture">Coffee tables</option></var>
    <var><option value="furniture">Office tables</option></var>
    <option value="furniture" disabled>Decor</option>
    <option value="decor">Homedecor</option>
    <option value="furniture" disabled>furnishing</option>
    <option value="furnishing">Furnishing</option>
   
    <option value="garden"disabled >Gardening store</option>
    <option value="garden" >Tool sets</option>
    <option value="garden" >Live plants</option>
    <option value="garden" >Garden sprayer</option>
    <option value="garden" >plant containers</option> */}
                </select>
                {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Kitchenware
                  </a>
                  <a class="dropdown-item" href="#">
                    Furniture
                  </a>
                  <a class="dropdown-item" href="#">
                    Homedecor
                  </a>
                  <a class="dropdown-item" href="#">
                    Furnishing
                  </a>
                  <a class="dropdown-item" href="#">
                    Gardening store
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <label for="inputPrice" className="col-sm-2 col-form-label">
              Product Price
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="inputPrice"
                onChange={handlePrice}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label for="inputsize" className="col-sm-2 col-form-label">
              Product Size
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                id="inputsize"
                onChange={handleSize}
              />
            </div>
          </div>
          <button
            class="btn col-2 mb-4 "
            onClick={addproduct}
            style={{
              marginLeft: "30rem",
              backgroundColor: "black",
              color: "white",
            }}
          >
            ADD
          </button>
          {/* <Link
            to="/vendormain"
            class="btn col-2 mb-4 "
            style={{
              marginLeft: "30rem",
              backgroundColor: "black",
              color: "white",
            }}
            type="button"
          >
            ADD
          </Link> */}
        </form>
      </div>
    </div>
  );
}

export default Addproduct;
