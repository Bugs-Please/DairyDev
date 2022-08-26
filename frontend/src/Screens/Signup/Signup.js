import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { auth, db } from "../../firebase";
import { FcGoogle } from "react-icons/fc"
import { FaFacebookF, FaApple } from "react-icons/fa"
import group from "./group.svg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phone, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            toast.warn("Please Confirm your password");

        }
        else {
            const userCreds = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCreds.user;
            const docRef = doc(db, "users", user.email);
            
            const userdata ={
                uid: user.uid,
                role: role,
                email : user.email,
            }

            const firebaseUser = await setDoc(docRef,userdata);
            console.log(firebaseUser)
            
                const data = {
                    "username" : email
                };
            // console.log(role);
            if(role==="3")
            {
                const res = await axios.post("http://localhost:8081/api/registerenrolluserorg1", data)
                console.log(res)
                if(res.data.status === "pass") {
                    toast.info("Sign up Successfull")
                    setTimeout(() => {
                        navigate('/')
                    }, 3000);
                }
            }
            if(role==="2")
            {
                const res = await axios.post("http://localhost:8082/api/registerenrolluserorg2", data)
                console.log(res)
                if(res.data.status === "pass") {
                    toast.info("Sign up Successfull")
                    setTimeout(() => {
                        navigate('/')
                    }, 3000);

                }
            }
            if(role==="4")
            {
                const res = await axios.post("http://localhost:8083/api/registerenrolluserorg3", data)
                console.log(res)
                if(res.data.status === "pass") {
                    toast.info("Sign up Successfull")
                    setTimeout(() => {
                        navigate('/')
                    }, 3000);

                }
            }
            if(role==="5")
            {
                const res = await axios.post("http://localhost:8084/api/registerenrolluserorg4", data)
                console.log(res)
                if(res.data.status === "pass") {
                    toast.info("Sign up Successfull")
                    setTimeout(() => {
                        navigate('/')
                    }, 3000);

                }

            }
        }

    }

    const handleChange = (event) => {
        setRole(event.target.value)
    }

    // const ColoredLine = ({ color }) => (
    //     <hr
    //         style={{
    //             color: color,
    //             backgroundColor: color,
    //             height: 1,
    //             margin: 10
    //         }}
    //     />
    // );

    return (
        <div style={{ "overflow-x": "hidden" }}>
            <Row style={{ display: "flex", justifyContent: 'space-evenly', overflowX: 'hidden', overflowY: 'hidden' }}>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Col md={6} sm={12}>
                    <div className="d-flex flex-column justify-content-center p-5 m-5">
                        <h1 className="title text-center">Register</h1>
                        <form onSubmit={register}>
                            <div className="form-row">

                                <div className="form-group col-md-12">
                                    <input type="email" value={email} className="form-control" id="inputEmail4" placeholder="Email"
                                        onChange={e => setEmail(e.target.value)} />
                                </div>
                                <br />

                                <div className="form-group col-md-12">
                                    <input type="password" value={password} className="form-control" id="password1" placeholder="Password"
                                        onChange={e => setPassword(e.target.value)} />
                                </div>
                                <br />

                                <div className="form-group col-md-12">
                                    {/* <label for="inputPassword4">Confirm Password</label> */}
                                    <input type="password" value={confirmPassword} className="form-control" id="password2" placeholder="Confirm Password"
                                        onChange={e => setConfirmPassword(e.target.value)} />
                                </div>
                                <br />

                                <div className="form-group col-md-12">
                                    <select id="select" value={role} onChange={handleChange} className="form-control custom-select custom-select-sm col-md-12 shadow-none">
                                        <option selected>Select your user role</option>
                                        <option value="1">Dairy Farmer</option>
                                        <option value="2">Retailer</option>
                                        <option value="3">Cooperative</option>
                                        <option value="4">Shipper</option>
                                        <option value="5">Production Unit</option>
                                    </select>
                                </div>

                                {/* <ColoredLine color="black" /> */}

                                <div className="container">
                                    <div className="row mt-3 d-flex flex-column">
                                        <div className="d-flex mt-3 w-100">
                                            <div className=" m-auto">
                                                <FcGoogle size={50} />
                                            </div>
                                            <div className=" m-auto">
                                                <FaFacebookF size={50} style={{ "color": "#3B5999" }} />
                                            </div>
                                            <div className="m-auto">
                                                <FaApple size={50} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* <ColoredLine color="black" /> */}

                                    <div className="row mt-3">
                                        <button type="submit" className="btn rounded-3 mt-3 mb-3 btn-block btn-primary">Register Now</button>
                                    </div>
                                    
                                    <div className="row mt-3"> 
                                        <a href="/phone-signup" className="btn btn-block btn-outline-none rounded-3 text-black text-decoration-none text-primary" >Continue with Phone Number</a>

                                    </div>

                                    <div className="login-link">
                                        <a href="/login" className="text-center text-decoration-none"><h5>Already have an account? <strong>Sign In</strong></h5></a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </Col>
                <Col className="d-none d-sm-none d-md-block">
                    <img src={group} style={{ height: "100vh" }} alt='broom farmer' />
                </Col>
            </Row>
        </div>
    );
}

export default Signup;