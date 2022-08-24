import React,{useState,useEffect} from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar/Sidebar';
import axios from 'axios';

const ShippingBatchDetails = () => {
    const [cattle,setCattle] = useState('');
    const [batchHolder,setBatchHolder] = useState(''); 
    const [volume,setVolume] = useState(''); 
    const [retailer,setRetailer] = useState(''); 
    const [fatContent,setFatContent] = useState(''); 
    const [waterContent,setWaterContent] = useState(''); 
    const [date,setDate] = useState('');
    return (
        <Row className='align-items-center'>
            <Sidebar />
            <Col xs={10} md={10} sm="auto" >
                <Container className="d-flex flex-column justify-content-center align-content-center">
                    <div className="d-flex justify-content-around align-items-center">
                        <h3>Shipping Batch Report</h3>
                        <h6>
                            Date: {date}
                        </h6>
                    </div>
                    <Row className="justify-content-evenly">
                        <Col xs={6} md={4} sm={6} className="rounded-4 mt-4 mb-4 d-flex flex-column align-items-center text-left p-4" style={{"backgroundColor":"rgba(0,0,0,0.1)"}}>
                            <h5 style={{fontWeight:"500"}}>Type of Cattle</h5>
                            <span style={{color:"#3B5999",fontWeight:"400"}}>{cattle}</span>
                        </Col>
                        <Col xs={6} md={4} sm={6} className="rounded-4 mt-4 mb-4 d-flex flex-column align-items-center text-left p-4" style={{"backgroundColor":"rgba(0,0,0,0.1)"}}>
                            <h5 style={{fontWeight:"500"}}>Batch Holder</h5>
                            <span style={{color:"#3B5999",fontWeight:"400"}}>{batchHolder}</span>
                        </Col>
                    </Row>
                    <Row className="justify-content-evenly">
                        <Col xs={6} md={4} sm={6} className="rounded-4 mt-4 mb-4 d-flex flex-column align-items-center text-left p-4" style={{"backgroundColor":"rgba(0,0,0,0.1)"}}>
                            <h5 style={{fontWeight:"500"}}>Total Volume of Batch</h5>
                            <span style={{color:"#3B5999",fontWeight:"400"}}>{volume}</span>
                        </Col>
                        <Col xs={6} md={4} sm={6} className="rounded-4 mt-4 mb-4 d-flex flex-column align-items-center text-left p-4" style={{"backgroundColor":"rgba(0,0,0,0.1)"}}>
                            <h5 style={{fontWeight:"500"}}>Retailer Center</h5>
                            <span style={{color:"#3B5999",fontWeight:"400"}}>{retailer}</span>
                        </Col>
                    </Row>
                    <Row className="justify-content-evenly">
                        <Col xs={6} md={4} sm={6} className="rounded-4 mt-4 mb-4 d-flex flex-column align-items-center text-left p-4" style={{"backgroundColor":"rgba(0,0,0,0.1)"}}>
                            <h5 style={{fontWeight:"500"}}>Fat Content</h5>
                            <span style={{color:"#3B5999",fontWeight:"400"}}>{fatContent}</span>
                        </Col>
                        <Col xs={6} md={4} sm={6} className="rounded-4 mt-4 mb-4 d-flex flex-column align-items-center text-left p-4" style={{"backgroundColor":"rgba(0,0,0,0.1)"}}>
                            <h5 style={{fontWeight:"500"}}>Water Content</h5>
                            <span style={{color:"#3B5999",fontWeight:"400"}}>
                                {waterContent}
                            </span>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}

export default ShippingBatchDetails