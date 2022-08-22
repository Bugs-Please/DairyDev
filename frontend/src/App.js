
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
import Form from './Components/BatchForm/BatchForm';
import TransferBaForm from './Components/TransferForm/TransferBatchForm';
import ShippingBillForm from './Components/Forms/ShippingBillForm';

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
                <Route path = "/new-batch" element={<Form/>} />
                <Route path = "/farmers" element={<FarmerList/>} />
                <Route path = "/transferbatch" element={<TransferBaForm/>} />
                <Route path = "/generateshippingbill" element={<ShippingBillForm/>} />
                
            </Routes>
        </Router>
        </AuthProvider>
    )
}

export default App