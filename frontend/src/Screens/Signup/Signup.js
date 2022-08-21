import axios from "axios";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../firebase";
import group from "./group.svg";
import './Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [role, setRole] = useState('')

    const register = async(e) =>{
        e.preventDefault()
        const userCreds = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCreds.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            role: role,
            email : user.email,
          });

          const data = {
            "username" : email
          };

      
    // console.log(role);
    if(role==="1")
    {
        const res = await axios.post("https://20ed-45-127-121-90.in.ngrok.io/api/registerenrolluserorg1", data)
        console.log(res)
    }
    if(role==="2")
    {
        const res = await axios.post("https://20ed-45-127-121-90.in.ngrok.io/api/registerenrolluserorg1", data)
        console.log(res)
    }
    if(role==="3")
    {
        const res = await axios.post("https://20ed-45-127-121-90.in.ngrok.io/api/registerenrolluserorg1", data)
        console.log(res)
    }
    if(role==="4")
    {
        const res = await axios.post("https://20ed-45-127-121-90.in.ngrok.io/api/registerenrolluserorg1", data)
        console.log(res)
    }

    }

    const handleChange = (event) => {
        setRole(event.target.value)
      }

    return (
        <div className="signup">
            <div className="container d-flex">
                <div className="container1">
                    <h1 className="title">Register</h1>
                    <br />
                    <form onSubmit={register}>
                        <div className="form-row">

                            <div className="form-group col-md-12">
                                <label>
                                    <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <input type="email" value={email} className="form-control" id="inputEmail4" placeholder="Email" 
                                onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <br />

                            <div className="form-group col-md-12">
                                <input type="password" value={password} className="form-control" id="password1" placeholder="Password" 
                                onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <br />

                            <div className="form-group col-md-12">
                                {/* <label for="inputPassword4">Confirm Password</label> */}
                                <input type="password" value={confirmPassword} className="form-control" id="password2" placeholder="Confirm Password" 
                                onChange={e => setConfirmPassword(e.target.value)}/>
                            </div>
                            <br />

                            <div className="form-group col-md-12">
                                <select id="select" value={role} onChange={handleChange} className="form-control custom-select custom-select-sm col-md-12 shadow-none">
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