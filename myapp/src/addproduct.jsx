import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
function Addproduct() {
    return (

        <div >
            <div className='nav' style={{ width: "80rem", height: "1rem" }}></div>
            
            <div className="mt-5" style={{marginLeft:"300px"}}>
            <form >

                <div className="row mb-3">
                    <label for="inputname" className="col-sm-2 col-form-label"> Product Name</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="inputname" />
                    </div>
                </div>

                <div className="row mb-3">
                <label className=" col-sm-2 col-form-label " for="inputGroupFile02">Product Image</label>
                    <div className="input-group col-sm-6">
                        <input type="file" className="form-control" id="inputGroupFile02" />
                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                    </div>
                </div>

                <div className="row mb-3">
                    <label for="inputname" className="col-sm-2 col-form-label"> Product category</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="inputcategory" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label for="inputPrice" className="col-sm-2 col-form-label">Product Price</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="inputPrice" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label for="inputsize" className="col-sm-2 col-form-label">Product Size</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="inputsize" />
                    </div>
                </div>


                <Link to="/vendormain" class="btn col-2 mb-4 " style={{ marginLeft: "30rem",backgroundColor:"black" ,color:"white" }} type="button">ADD</Link>
            </form>
            </div>
        </div>
    )
}

export default Addproduct;