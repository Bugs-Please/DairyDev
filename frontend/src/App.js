import React, { useState } from 'react';
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
import Form from './Components/Form/Form';

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
            </Routes>
        </Router>
        </AuthProvider>
    )
}

export default App