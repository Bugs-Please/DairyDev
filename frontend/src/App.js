
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import Dashboard from './Screens/Dashboard/Dashboard';
import { AuthProvider } from './AuthProvider';
// import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Screens/LandingPage/LandingPage';
import Login from './Screens/Login/Login';
import Signup from './Screens/Signup/Signup';
import Tracking from './Components/Tracking/Tracking';
import FarmerList from './Screens/Dashboard/FarmerList';
import GenerateBatch from './Components/Forms/GenerateBatch';
import TransferBatch from './Components/Forms/TransferBatch';
import GenerateShippingBill from './Components/Forms/GenerateShippingBill';
import TransferShippingBill from './Components/Forms/TransferShippingBill';
import GenerateLabReport from './Components/Forms/GenerateLabReport';
import TransferLabReport from './Components/Forms/TransferLabReport';
import BatchDetails from './Screens/Dashboard/BatchDetails';
import ShippingBatchDetails from './Screens/Dashboard/ShippingBillDetails';
import ProcessingBatchDetails from './Screens/Dashboard/ProcessingBillDetails';
import QR from './Screens/QRtest/qr';


const App = () => {
    return (
        <AuthProvider>
        <Router>
            <Routes>
                <Route path = "/" element={<LandingPage />} />
                <Route path = "/login" element={<Login />} />
                <Route path = "/signup" element={<Signup />} />
                <Route path = "/dashboard" element={<Dashboard/>} />
                <Route path = "/tracking" element={<Tracking/>} />
                <Route path = "/new-batch" element={<GenerateBatch/>} />
                <Route path = "/farmers" element={<FarmerList/>} />
                <Route path = "/transferbatch" element={<TransferBatch/>} />
                <Route path = "/generateshippingbill" element={<GenerateShippingBill/>} />
                <Route path = "/transfershippingbill" element={<TransferShippingBill/>} />
                <Route path = "/generatelabreport" element={<GenerateLabReport/>} />
                <Route path = "/transferlabreport" element={<TransferLabReport/>} />

                <Route path = "/batch-details" element={<BatchDetails/>} />
                <Route path = "/shipping-batch" element = {<ShippingBatchDetails/>} />
                <Route path = "/processing-batch" element = {<ProcessingBatchDetails/>} />
                <Route path = "/tracking/:id" element = {<QR />} />

                {/* <Route path = "/scanqr" element = {<QRscanner />} /> */}
                
            </Routes>
        </Router>
        </AuthProvider>
    )
}

export default App