import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Profile from './FarmerProfile'

const Dashboard = () => {
  return (
    <div>
        <Row>
            <Sidebar />
            <Col xs = {10}>
                <h1>dashboard for all profiles</h1>
                <Profile/>
            </Col>
        </Row>
    </div>
  )
}

export default Dashboard