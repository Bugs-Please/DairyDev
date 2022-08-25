import axios from 'axios';
import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { auth, db } from '../../firebase';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaApple } from 'react-icons/fa';
import group from './group.svg';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PhoneSignup = () => {
  const countryCode = '+91';
  const [phone, setPhoneNumber] = useState('');
  const [OTP, setOTP] = useState('');
  const [role, setRole] = useState('');
  const [final, setFinal] = useState('');
  const navigate = useNavigate();
  const [expandForm, setExpandForm] = useState(false);

  const generateRecaptcha = () => {
    console.log('recaptcha');
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        // size: 'invisible',
        callback: (res) => {
          // onSignUpSubmit();
        },
      },
      auth
    );
  };
  const requestOTP = (e) => {
    e.preventDefault();
    if (phone.length >= 12) {
      setExpandForm(true);
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phone, appVerifier)
        .then((result) => {
          window.result = result;
        })
        .catch((err) => {
          toast.warn(err);
        });
    }
  };

  const verifyOTP = (e) => {
    let otp = e.target.value;
    setOTP(otp);
    if (otp.length === 6) {
      console.log(otp);
      let result = window.result;
      result
        .confirm(otp)
        .then((rslt) => {
          const user = rslt.user;
          console.log('user => ', user);
          const userProviderData = user.providerData;
          const docRef = doc(db, 'users', userProviderData[0].phoneNumber);

          const userdata = {
            uid: userProviderData[0].uid,
            role: role,
            phoneNumber: userProviderData[0].phoneNumber,
          };

          setDoc(docRef, userdata)
            .then((firebaseUser) => {
              console.log(firebaseUser);
              navigate('/');
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          toast.warn(err);
        });
    }
  };

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <Row
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        overflowX: 'hidden',
        overflowY: 'hidden',
      }}
    >
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
      <Col /* md={7 */ className="col-12 col-md-7">
        <div className="d-flex flex-column justify-content-center p-5 m-5">
          <h1 className="title text-center">Register Using Phone Number</h1>
          <form onSubmit={requestOTP}>
            <div className="form-row">
              <div className="form-group col-md-12">
                <input
                  type="name"
                  value={phone}
                  className="form-control"
                  id="password2"
                  placeholder="Phone Number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              {expandForm === true && (
                <>
                  <div className="form-group mt-3 col-md-12">
                    <input
                      type="password"
                      value={OTP}
                      className="form-control"
                      id="password2"
                      placeholder="Enter Your Otp sent on above entered number"
                      onChange={verifyOTP}
                    />
                  </div>
                  <br />

                  <div className="form-group col-md-12">
                    <select
                      id="select"
                      value={role}
                      onChange={handleChange}
                      className="form-control custom-select custom-select-sm col-md-12 shadow-none"
                    >
                      <option selected>Select your user role</option>
                      <option value="1">Dairy Farmer</option>
                      <option value="2">Retailer</option>
                      <option value="3">Cooperative</option>
                      <option value="4">Shipper</option>
                      <option value="5">Production Unit</option>
                    </select>
                  </div>
                </>
              )}
              {expandForm === false && (
                <>
                  <button
                    type="submit"
                    className="btn rounded-3 mt-3 mb-3 btn-block btn-primary"
                  >
                    Request Otp
                  </button>
                </>
              )}
              <div id="recaptcha-container"></div>
            </div>
          </form>
          <div className="container">
            <div className="row mt-3 d-flex flex-column">
              <div className="d-flex mt-3 w-100">
                <div className=" m-auto">
                  <FcGoogle size={50} />
                </div>
                <div className=" m-auto">
                  <FaFacebookF size={50} style={{ color: '#3B5999' }} />
                </div>
                <div className="m-auto">
                  <FaApple size={50} />
                </div>
              </div>
            </div>

            <div className="login-link">
              <a href="/login" className="text-center text-decoration-none">
                <h5>
                  Already have an account? <strong>Sign In</strong>
                </h5>
              </a>
            </div>
          </div>
        </div>
      </Col>
      <Col /* md={5} */ className="d-sm-none d-md-block col-md-5">
        <img src={group} style={{ height: '100vh' }} alt="broom farmer" />
      </Col>
    </Row>
  );
};

export default PhoneSignup;
