import React,{useState, useContext} from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar/Sidebar';
import axios from 'axios';
import { AuthContext } from '../../AuthProvider';
import Loader from '../../Components/Loader/Loader';

const ProcessingBatchDetails = () => {
    const [status,setStatus] = useState('');
    const [dateOfIssueCustomCert,setDateOfIssueCustomCert] = useState(''); 
    const [labReportHolder,setLabReportHolder] = useState(''); 
    
    const [loading,setLoading] = useState(true); 
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        username: "",
        milkBatchNumber: "",    
    });
    
    const {
        milkBatchNumber,
        
    } = formData;
    
    const onChange = (e) => {
        console.log(e.target.name, e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
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
            setStatus(res.data.result.status);
            setDateOfIssueCustomCert(res.data.result.dateOfIssueCustomCert);
            setLabReportHolder(res.data.result.labReportHolder);
        }
    
    
        fetchEvents();
    
    }
    return (
        <Row className='align-items-center'>
            <Sidebar />
            <Col xs={10} md={10} sm="auto" >
                {
                    loading ? 
                    <>
                        <Loader />
                    </> : 
                    <>
                        <Container className="d-flex flex-column justify-content-center align-content-center">
                            <form onSubmit={FormSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                            <label for="milkBatchNumber" className="form-label label-batch">
                                Milk Batch Number
                            </label>
                            <input
                                className="form-control p-2"
                                type="text"
                                placeholder="Milk Batch Number"
                                name="milkBatchNumber"
                                value={milkBatchNumber}
                                onChange={(e) => onChange(e)}
                                required
                            />
                            </div>
                            
                        </div>

                        <br />

                        <br />
                        <div class="mx-auto text-center">
                            <input
                            type="submit"
                            className="py-2 px-4 btn btn-primary"
                            value="Track Now"
                            />
                        </div>
                        </form>
                                <div className="d-flex justify-content-around align-items-center">
                                    <h3>Processing Unit Batch Report</h3>
                                    <h6>
                                        Status: {status}
                                    </h6>
                                </div>
                                <Row className="justify-content-evenly">
                                    <Col xs={6} md={4} sm={6} className="rounded-4 mt-4 mb-4 d-flex flex-column align-items-center text-left p-4" style={{"backgroundColor":"rgba(0,0,0,0.1)"}}>
                                        <h5 style={{fontWeight:"500"}}>Date of Certificate Issued</h5>
                                        <span style={{color:"#3B5999",fontWeight:"400"}}>{dateOfIssueCustomCert}</span>
                                    </Col>
                                    <Col xs={6} md={4} sm={6} className="rounded-4 mt-4 mb-4 d-flex flex-column align-items-center text-left p-4" style={{"backgroundColor":"rgba(0,0,0,0.1)"}}>
                                        <h5 style={{fontWeight:"500"}}>Lab Report Holder</h5>
                                        <span style={{color:"#3B5999",fontWeight:"400"}}>{labReportHolder}</span>
                                    </Col>
                                </Row>
                            </Container>
                    </>
                }
                
            </Col>
        </Row>
    )
}

export default ProcessingBatchDetails