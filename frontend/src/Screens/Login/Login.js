import React, { useState } from "react";
import group from "./group.svg";
/* import './Login.css'; */
import {
    FacebookLoginButton,
    GoogleLoginButton
} from "react-social-login-buttons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Container, Row, Col } from "react-bootstrap";
import { auth } from "../../firebase";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async (e) => {
        e.preventDefault()
        const res = await signInWithEmailAndPassword(auth, email, password);
        console.log(res)

    }
    return (
        /* <div className="login">
            <div className="container d-flex">
                <div className="container1">
                    <img src={group} />
                </div>
                <div className="container2">
                    <h1 className="title">Sign In</h1>
                    <hr />
                    <GoogleLoginButton/>
                    <br />
                    <FacebookLoginButton />
                    <hr />
                    <br />

                    <form onSubmit={login}>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                            
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" value={email} 
                                onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <br />

                            <div className="form-group col-md-12">
                            
                                <input type="password" className="form-control" id="password1" placeholder="Password" value={password}
                                onChange={e => setPassword(e.target.value)}/>                                              
                            </div>
                            <br />

                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Sign In</button>
                            </div>

                            <br />
                            <div className="signup-link">
                                <a href="/signup"><h5>Don't have an account? Register</h5></a>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </div> */

        <Row style={{ display: "flex", justifyContent: 'space-evenly', overflowX: 'hidden', overflowY: 'hidden' }}>

            <Col className="d-sm-none d-md-block col-md-5">
                <img src={group} style={{ height: "100vh" }} alt='milk can' />
            </Col>
            <Col className="col-12 col-md-7">
                <div className="d-flex flex-column justify-content-center p-5 m-5">
                    <h1 className="title text-center">Sign In</h1>
                    
                    
                    <GoogleLoginButton />
                    <br/>
                    <FacebookLoginButton />
                    <br/>
                    

                    <form onSubmit={login}>
                            <div className="form-group col-md-12">
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" value={email}
                                    onChange={e => setEmail(e.target.value)} />
                            </div>

                            <div className="form-group col-md-12">
                                <input type="password" className="form-control" id="password1" placeholder="Password" value={password}
                                    onChange={e => setPassword(e.target.value)} />
                            </div>

                            <div className="row mt-3">
                                <button type="submit" className="btn rounded-3 mt-3 mb-3 btn-block btn-primary">Sign In</button>
                            </div>

                            <div className="signup-link">
                                <a href="/signup" className="text-center text-decoration-none"><h5>Don't have an account? Register</h5></a>
                            </div>

                    </form>
                </div>
            </Col>
        </Row>
    );
}

export default Login;