import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
function Login() {
    return (

        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="assets/bright-sale-presentation-slide-template_1262-19198.webp"
                            className="img-fluid" alt="Sample image" />

                    </div>

                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>

                            <div className="form-outline mb-4">
                            <div><h4>Login</h4></div>
                            <label className="form-label" htmlFor="form3Example3">Mobile number</label>
                                <input type="password" id="form3Example3" className="form-control "
                                    placeholder="" />
                                
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                
                                <Link to="/verifyotplog" className="btn "
                                    style={{ margin: "15px", paddingLeft: "2.5rem", paddingRight: "2.5rem", backgroundColor: "black",color:"white" }}>Send OTP</Link>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Not registered ? <Link to="/register"
                                    className="link-danger">Register</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </section>




    )
}

export default Login;