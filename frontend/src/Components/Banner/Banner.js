import React from 'react'
import { Col, Container, Row, Button } from "react-bootstrap"
import MilkPack from "../../Assets/images/MilkPack.png"
const Banner = () => {
    return (
        <Container >
            <Row className="align-items-center">
                <Col>
                    <h1>
                        Solution to trace milk supplied by unorganized sector
                    </h1>
                    <p>
                        Integrating Blockchain Technology with IOT into the milk supply chain to improve the traceability of milk and build stakeholder trust in the unorganized milk supply chain
                    </p>
                    <Button variant="primary" >Join Now !!</Button>
                </Col>
                <Col >
                    <div className='d-flex justify-content-center'>
                        <img   src={MilkPack}  alt="milk tetra pack" />  
                    </div>                    
                </Col>
            </Row>
            
        </Container>
    )
}

export default Banner