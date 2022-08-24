import React,{useState,useEffect} from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar/Sidebar';
import axios from 'axios';

const ShippingBatchDetails = () => {
    const [shippingCost,setShippingCost] = useState(''); 
    const [address,setAddress] = useState(''); 
    const [estDeliveryDate,setEstDeliveryDate] = useState(''); 
    const [billHolder,setBillHolder] = useState(''); 
    const [loading,setLoading] = useState(true); 
    const { user } = useContext(AuthContext);
    const FormSubmit = async (e) => {
        e.preventDefault();
        const fetchEvents = async () => {
            setLoading(true)
            
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                params: {
                "username": user.auth.currentUser.email,
                "milkBatchNumber": formData.milkBatchNumber,
                }
            }
            const res = await axios.get("http://localhost:8081/api/querygeneratedmilkcert", config)
            console.log(res.data.result);
            setShippingCost(res.data.result.shippingCost);
            setAddress(res.data.result.address);
            setEstDeliveryDate(res.data.result.estimatedDeliveryDate);
            setBillHolder(res.data.result.billHolder);
        }
    
    
        fetchEvents();
    
    }
    return (
        <Row className='align-items-center'>
            <Sidebar />
            <Col xs={10} md={10} sm="auto" >
                <Container className="d-flex flex-column justify-content-center align-content-center">
                    <div className="d-flex justify-content-around align-items-center">
                        <h3>Shipping Batch Report</h3>
                        <h6>
                           Estimated Delivery Date: {estDeliveryDate}
                        </h6>
                    </div>
                    <Row className="justify-content-evenly">
                        <Col xs={6} md={4} sm={6} className="rounded-4 mt-4 mb-4 d-flex flex-column align-items-center text-left p-4" style={{"backgroundColor":"rgba(0,0,0,0.1)"}}>
                            <h5 style={{fontWeight:"500"}}>Shipping Cost</h5>
                            <span style={{color:"#3B5999",fontWeight:"400"}}>{shippingCost}</span>
                        </Col>
                        <Col xs={6} md={4} sm={6} className="rounded-4 mt-4 mb-4 d-flex flex-column align-items-center text-left p-4" style={{"backgroundColor":"rgba(0,0,0,0.1)"}}>
                            <h5 style={{fontWeight:"500"}}>Address</h5>
                            <span style={{color:"#3B5999",fontWeight:"400"}}>{address}</span>
                        </Col>
                    </Row>
                    <Row className="justify-content-evenly">
                        <Col xs={12} md={12} sm={6} className="rounded-4 mt-4 mb-4 d-flex flex-column align-items-center text-left p-4" style={{"backgroundColor":"rgba(0,0,0,0.1)"}}>
                            <h5 style={{fontWeight:"500"}}>Bill Holder</h5>
                            <span style={{color:"#3B5999",fontWeight:"400"}}>{billHolder}</span>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}

export default ShippingBatchDetails