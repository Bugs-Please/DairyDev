import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import group from "./group.svg";
import './Signup.css';
const Signup = () => {
    return (
        <div className="signup">
            <div className="container d-flex">
                <div className="container1">
                    <h1 className="title">Register</h1>
                    <br />
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                            </div>
                            <br />

                            <div className="form-group col-md-12">
                                <input type="password" className="form-control" id="password1" placeholder="Password" />
                            </div>
                            <br />

                            <div className="form-group col-md-12">
                                {/* <label for="inputPassword4">Confirm Password</label> */}
                                <input type="password" className="form-control" id="password2" placeholder="Confirm Password" />
                            </div>
                            <br />

                            <div className="form-group col-md-12">
                                <select className="form-control custom-select custom-select-sm col-md-12 shadow-none">
                                    <option selected>Select your user role</option>
                                    <option value="1">Dairy Farmer</option>
                                    <option value="2">Cooperative</option>
                                    <option value="3">Milk chilling centre</option>
                                    <option value="4">Milk packaging centre</option>
                                    <option value="5">Consumer</option>
                                </select>
                            </div>
                            <br />

                            <hr />
                            <div className="social-login">
                                <div className="row">
                                    <div className="col-4">
                                        <button><a href="#" class="fa fa-google"></a></button>

                                    </div>
                                    <div className="col-4">
                                        <button><a href="#" class="fa fa-facebook"></a></button>

                                    </div>
                                    <div className="col-4">
                                        <button><a href="#" class="fa fa-apple"></a></button>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Register Now</button>
                            </div>

                            <br />
                            <div className="login-link">
                                <a href="#"><h5>Already have an account? Sign In</h5></a>
                            </div>
                        </div>

                    </form>
                </div>
                <div className="container2">
                    <img src={group} />
                </div>
            </div>
        </div>

    );
}

export default Signup;