import React from "react";
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
      <div className="row">
        
        <div className="card col-md-3" style={{ width: "18rem" }}>
          <img
            style={{ height: "300px" }}
            src={props.imgurl}
            className="card-img-top mt-2"
            alt="image unavailable"
          />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <ReactStars size={15} isHalf={true} />

            <p className="card-text">{props.category}</p>
            <p className="card-text">{props.details}</p>
            <p className="card-text">{props.size}</p>

            {/*<a href="/#" className='btn btn-primary'>Buy now</a>*/}
          </div>
        </div>
         
      </div>

      {/* <tbody>
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
                
            </tbody> */}
    </div>
  );
}

export default Productview;
