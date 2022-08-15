import React from 'react';
import { Tabs, Tab, Container, Row } from 'react-bootstrap';
const Process = () => {
    return (
        // <Nav fill  justify variant="tabs" defaultActiveKey="/home">
        //     <Nav.Item>
        //         <Nav.Link className='d-flex justify-content-center'>
        //             <h3 style={{color:"#3B5999"}}>01</h3>
        //             <span style={{color:"#3B5999", margin:'auto 0', padding:'0 0.5rem'}}>Dairy Farmer</span>
        //         </Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link className='d-flex justify-content-center'>
        //             <h3 style={{color:"#3B5999"}}>02</h3>
        //             <span style={{color:"#3B5999", margin:'auto 0', textAlign:'left', padding:'0 0.5rem'}}>Small Co-operative Collection Centre</span>
        //         </Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link className='d-flex justify-content-center'>
        //             <h3 style={{color:"#3B5999"}}>03</h3>
        //             <span style={{color:"#3B5999", margin:'auto 0', padding:'0 0.5rem'}}>Milk Chilling Centre</span>
        //         </Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link className='d-flex justify-content-center'>
        //             <h3 style={{color:"#3B5999"}}>04</h3>
        //             <span style={{color:"#3B5999", margin:'auto 0', padding:'0 0.5rem'}}>Packaging Centre</span>
        //         </Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link className='d-flex justify-content-center'>
        //             <h3 style={{color:"#3B5999"}}>05</h3>
        //             <span style={{color:"#3B5999", margin:'auto 0', padding:"0 0.5rem"}}>Packaging Centre</span>
        //         </Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link className='d-flex justify-content-center'>
        //             <h3 style={{color:"#3B5999"}}>06</h3>
        //             <span style={{color:"#3B5999", margin:'auto 0', padding:"0 0.5rem"}}>Consumer</span>
        //         </Nav.Link>
        //     </Nav.Item>
        // </Nav>
        <Tabs
            defaultActiveKey="profile"
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
                        <p>Recording and verifying the farmer</p>
                    </Row>
                    <Row>
                        <p>Milking Data and Quantity</p>
                    </Row>
                    <Row>
                        <p>Digital batch identity Creation. </p>
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
                        <p>
                            Details about basic Fat tests, SNF tests are recorded.
                        </p>
                    </Row>
                    <Row>
                        <p>
                            Over blockchain with the help of IOT sensors.
                        </p>
                    </Row>
                    <Row>
                        <p>
                            Create a batch of milk from multiple churns and create an assets.
                        </p>
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

                    </Row>
                    <Row>
                        
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

                    </Row>
                    <Row>
                        
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

                    </Row>
                    <Row>
                        
                    </Row>
                </Container>
            </Tab>
        </Tabs>
    )
}

export default Process