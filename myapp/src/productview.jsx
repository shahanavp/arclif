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
function Productview(props) {
  return (
    <div>


  <tbody>
    <tr>
      <th scope="row"><img src={props.imgurl} style={{width: "7rem", height: "7rem"}}/></th>
      <td style={{marginLeft:"10rem"}}>{props.name}</td>
      <td><ReactStars size={15} isHalf={true} /></td>
      <td><Link to="/vendorsingle">View</Link></td>
    </tr>
    </tbody>
   
      {/* <div className="card ml-3 mt-3 " style={{ width: "18rem" }}>
        <Link to="/vendorsingle">
          <img
            style={{ height: "300px" }}
            src={props.imgurl}
            className="card-img-top mt-2"
            alt="image unavailable"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title ">{props.name}</h5>
          <ReactStars size={15} isHalf={true} />
          <p className="card-text">{props.category}</p>
          <p className="card-text">{props.price}</p>
          <p className="card-text">{props.size}</p>
        </div>
      </div> */}
    </div>
  );
}

export default Productview;

{
  /* <tbody>
                <tr>
                    <td rowSpan={4}><img src={props.imgurl}  className="card-img-top mt-2"  alt="image unavailable" 
                    style={{width:"150px",height:"150px"}}/></td>
                    <td>{props.name}</td>
                </tr>
                <tr>
                 <td>{props.details}</td>
                 <td><Link to="/buy" className='text'>view</Link></td>
                 
                </tr>
                <tr>
               <td>{props.category}</td>
                </tr>
                <tr>
               <td>{props.size}</td>
                </tr>
                
            </tbody> */
}
