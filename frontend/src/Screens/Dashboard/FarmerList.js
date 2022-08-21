import React, { useState } from 'react'
import { Form, Table, Col, Row } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar/Sidebar';
import {
    FaTrash,
    FaEdit,
} from "react-icons/fa"
const FarmerList = () => {
    const [keyword,setKeyword] = useState('');
    return (
            <Row className="align-content-center align-items-center">
                <Sidebar/>
                <Col xs = {9} md = {9} >
                    <div className="d-flex justify-content-between mb-md-2">
                        <h3>Farmers List</h3>
                        <Form >
                            <Form.Control
                                type='text'
                                name={keyword}
                                onChange = {(e) => setKeyword(e.target.value)}
                                placeholder={keyword? keyword:"Search"}
                                className="rounded-5 text-black"
                                style={{backgroundColor:"rgba(0,0,0,0.1)",border:"none",outline:"none",fontWeight:"600"}}
                            ></Form.Control>        
                        </Form>
                        <button  className='btn btn-primary rounded-3' >Add New Farmers</button>
                    </div>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Cattle Count</th>
                                <th>Vaccination Status</th>
                                <th>Basic Diet</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >
                                    <a href="/profile" className="d-flex align-items-center  text-decoration-none ">
                                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                                        <span style={{fontWeight:'400'}} className="d-none d-sm-inline mx-1">Pratap Singh</span>
                                    </a>
                                </td>
                                <td>Igatpuri, Nashik</td>
                                <td>20</td>
                                <td>Yes</td>
                                <td>
                                    <a href="/profile" className="d-flex align-items-center  text-decoration-none ">View More</a>
                                </td>
                                <td>
                                    <FaEdit />
                                </td>
                                <td>
                                    <FaTrash />
                                </td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </Col>
            </Row>
    )
}

export default FarmerList;