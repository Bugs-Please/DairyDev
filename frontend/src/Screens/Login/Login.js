import React, { useState } from "react";
import group from "./group.svg";
import './Login.css';
import {
    FacebookLoginButton,
    GoogleLoginButton
} from "react-social-login-buttons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async(e) =>{
        e.preventDefault()
        const res = await signInWithEmailAndPassword(auth,email,password);
        console.log(res)
        
    }
    return (
        <div className="login">
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
                                {/* <label for="inputEmail4">Email</label> */}
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" value={email} 
                                onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <br />

                            <div className="form-group col-md-12">
                                {/* <label for="inputPassword4">Password</label> */}
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
        </div>
    );
}

export default Login;