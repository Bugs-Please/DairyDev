import React from 'react'
import { Row,} from 'react-bootstrap'
import FarmerList from './FarmerList'

const Dashboard = () => {
    return (
        <div>
            <Row>
                <FarmerList/>
            </Row>
        </div>
    )
}

export default Dashboard