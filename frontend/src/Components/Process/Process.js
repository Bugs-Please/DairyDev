import React from 'react';
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';
import logo1 from "../../Assets/images/logo1.png"
import logo2 from "../../Assets/images/logo2.png"
import logo3 from "../../Assets/images/logo3.png"
import process1 from "../../Assets/images/process1.png"
import process2 from "../../Assets/images/process2.png"
const Process = () => {
    return (
        <Tabs
            defaultActiveKey="farmer"
            id="justify-tab-example"
            className="mb-5"
            justify
        >
            <Tab 
                eventKey="farmer"
                title = {
                    <span className='d-flex justify-content-center'>
                        <h3 style={{color:"#3B5999"}}>01</h3>
                        <span style={{color:"#3B5999", margin:'auto 0', padding:'0 0.5rem'}}>Dairy Farmer</span>
                    </span>
                }
            >
                <Container>
                    <Row>
                        <Col>
                            <Row className='m-5'>
                                <div className='d-flex justify-content-start align-items-center'>
                                    <img src={logo1} style={{objectFit:'contain'}} height='75px' alt="milk tetra pack" />
                                    <p className='my-auto px-3'>Recording and verifying the farmer</p>
                                </div>
                            </Row>
                            <Row className='m-5'>
                                <div className='d-flex justify-content-start align-items-center'>
                                    <img src={logo2} style={{objectFit:'contain'}} height='75px' alt="milk tetra pack" />
                                    <p className='my-auto px-3'>Milking Data and Quantity</p>
                                </div>
                            </Row>
                            <Row className='m-5'>
                                <div className='d-flex justify-content-start align-items-center'>
                                    <img src={logo3} style={{objectFit:'contain'}} height='75px' alt="milk tetra pack" />
                                    <p className='my-auto px-3'>Digital batch identity Creation.</p>
                                </div>
                            </Row>
                        </Col>
                        <Col>
                            <div className='d-flex justify-content-center'>
                                <img src={process1} style={{objectFit:'contain'}} alt="milk tetra pack" />  
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Tab>
            <Tab 
                eventKey="Cooperative" 
                title = {
                    <div className='d-flex justify-content-center'>
                        <h3 style={{color:"#3B5999"}}>02</h3>
                        <span style={{color:"#3B5999", margin:'auto 0', padding:'0 0.5rem'}}>Small Co-operative Collection</span>
                    </div>
                }
            >
                <Container>
                    <Row>
                        <Col>
                            <Row className='m-5'>
                                <div className='d-flex justify-content-start align-items-center'>
                                    <img src={logo1} style={{objectFit:'contain'}} height='75px' alt="milk tetra pack" />
                                    <p className='my-auto px-3'>Details about basic Fat tests, SNF tests are recorded.</p>
                                </div>
                            </Row>
                            <Row className='m-5'>
                                <div className='d-flex justify-content-start align-items-center'>
                                    <img src={logo2} style={{objectFit:'contain'}} height='75px' alt="milk tetra pack" />
                                    <p className='my-auto px-3'>Over blockchain with the help of IOT sensors.</p>
                                </div>
                            </Row>
                            <Row className='m-5'>
                                <div className='d-flex justify-content-start align-items-center'>
                                    <img src={logo3} style={{objectFit:'contain'}} height='75px' alt="milk tetra pack" />
                                    <p className='my-auto px-3'>Create a batch of milk from multiple churns and create an assets.</p>
                                </div>
                            </Row>
                        </Col>
                        <Col>
                            <div className='d-flex justify-content-center'>
                                <img src={process2} style={{objectFit:'contain'}} alt="milk tetra pack" />  
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Tab>
            <Tab 
                eventKey="Milk" 
                title = {
                    <div className='d-flex justify-content-center'>
                        <h3 style={{color:"#3B5999"}}>03</h3>
                        <span style={{color:"#3B5999", margin:'auto 0', padding:'0 0.5rem'}}>Milk Chilling Centre</span>
                    </div>
                }
            >
                <Container>
                    <Row>
                        <p>Temperature recorded at various intervals in transportation process</p>
                    </Row>
                    <Row>
                        <p>Details are updated about the batch</p>
                    </Row>
                </Container>
            </Tab>
            <Tab 
                eventKey="packaging" 
                title = {
                    <div className='d-flex justify-content-center'>
                        <h3 style={{color:"#3B5999"}}>04</h3>
                        <span style={{color:"#3B5999", margin:'auto 0', padding:'0 0.5rem'}}>Packaging Centre</span>
                    </div>
                }
            >
                <Container>
                    <Row>
                        <p>Additional milk tests details such as platform tests are received a day before batch arrives.</p>
                    </Row>
                    <Row>
                        <p>This allowed better decisions to be made while the milk is being processed</p>
                    </Row>
                    <Row>
                        <p>Then Packaging information about the batch of milk and lab test reports are updated.</p>
                    </Row>
                </Container>
            </Tab>
            <Tab 
                eventKey="consumer" 
                title = {
                    <div className='d-flex justify-content-center'>
                        <h3 style={{color:"#3B5999"}}>05</h3>
                        <span style={{color:"#3B5999", margin:'auto 0', padding:'0 0.5rem'}}>Consumer</span>
                    </div>
                }
            >
                <Container>
                    <Row>
                        <p>
                            Data which will be visible to the end consumer are as follows :
                            <br/>
                            1. Farm that ships batch of milk
                            <br/>
                            2. The temperature at which it was delivered to the chilling and packaging centres.
                            <br/>
                            3. More information about detailed lab reports and test results.
                        </p>
                    </Row>
                    <Row>
                        <p>
                            As the entire data is stored on an immutable ledger with minimal human intervention the problems like adulteration, low quality, and counterfeiting should be countered.
                        </p>
                    </Row>
                    <Row>
                        <p>
                            Farmers will get financial benefits from increased quality and yield of milk and better bargaining power, customers can acquire excellent quality milk while tracking the status of the product.
                        </p>
                    </Row>
                    <Row>
                        <p>By Achieving end-to-end visibility we can recall a batch of milk at any point of failure in the supply chain thus minimizing losses and enhancing trust.</p>
                    </Row>
                </Container>
            </Tab>
        </Tabs>
    )
}

export default Process