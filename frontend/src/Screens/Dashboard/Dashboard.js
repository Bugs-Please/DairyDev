import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Dashboard = () => {
  return (
    <div>
        <Row>
            <Col xs = {2}>
                <Sidebar />
            </Col>
            <Col xs = {10}>
                <h1>dashboard for all profiles</h1>
            </Col>
        </Row>
    </div>
  )
}

export default Dashboard