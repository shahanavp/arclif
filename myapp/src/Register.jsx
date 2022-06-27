import React from "react";
import "./register.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import ReactDOM from 'react-dom/client';
function Register() {
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="assets/bright-sale-presentation-slide-template_1262-19198.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <div>
                  <h4>Register</h4>
                </div>
                <label className="form-label" htmlFor="form3Example5">
                  Name
                </label>
                <input
                  type="text"
                  id="form3Example5"
                  className="form-control"
                  placeholder=""
                />
                <label className="form-label" htmlFor="form3Example3">
                  Mobile number
                </label>
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control "
                  placeholder=""
                />
                <label className="form-label" htmlFor="form3Example4">
                  Email
                </label>
                <input
                  type="email"
                  id="form3Example4"
                  className="form-control"
                  placeholder=""
                />
              </div>

              {/* <div className="form-outline mb-3">
                  <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="password" />
                  <label className="form-label" htmlFor="form3Example4">password</label>
                </div> */}

              {/* <div className="d-flex justify-content-between align-items-center">
                  
                   <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div> 
                  <a href="#!" className="text-body">Forgot password?</a>
                </div> */}

              <div className="text-center text-lg-start mt-4 pt-2">
                {/* <button  className="btn "
                    style={{paddingLeft: "2.5rem", paddingRight: "2.5rem",backgroundColor:"greenyellow"}}>Login</button> */}
                <Link
                  to="/verifyotpreg"
                  className="btn "
                  style={{
                    margin: "15px",
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Send OTP
                </Link>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already registered?{" "}
                  <Link to="/login" className="link-danger">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
