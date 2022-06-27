import React from 'react';
import Productview from './productview';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams,
  } from "react-router-dom";
  import items from "./arr";
// import ReactDOM from 'react-dom/client';
function Productdetails()
{
    return(
    <div>
<div>
                    {/* <table className='table mt-5' >
                        <thead>
                            <tr><th >PRODUCT DETAILS</th>
                            </tr>
                        </thead> */}
                        <h3 className='text-center'>PRODUCT DETAILS</h3>
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

                                />)
                        })}
                    {/* </table> */}
                </div>


                <div className='d-flex'>
                    <Link to="/addproduct" class="btn  col-2 mb-4 " style={{ marginLeft: "50rem",backgroundColor:"grey",color:"white" }} type="button">Add Product</Link>
                    <Link to="/" class="btn col-1 mb-4 " style={{ marginLeft: "1rem",backgroundColor:"grey",color:"white" }} type="button">Exit</Link>
                </div> 
                </div>

    )
}

export default Productdetails;