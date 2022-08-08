import React from "react";
import './Signup.css'
import farmer from "./farmer.png";
import Register from "./Register.png";
import group from "./group.svg";

import { Form, Button } from "react-bootstrap";
const Signup = () => {
    return (
        <div className="signup">
            <div className="container d-flex">
                <div className="container1">
                    <Form /* onSubmit={handleSubmit} */>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>

                        
                        <a href='/signup'>New here? Register</a><br /><br />

                        <Button variant="primary" type="submit">
                            Login
                        </Button>

                    </Form>
                </div>
                <div className="container2">
                    <img src={group} />
                </div>
            </div>
        </div>
    );
}

export default Signup;