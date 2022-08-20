import React, { useState } from 'react'

import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
// import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Screens/LandingPage/LandingPage';
import Login from './Screens/Login/Login';
import Signup from './Screens/Signup/Signup';

const App = () => {
    return (
        <AuthProvider>
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
        </AuthProvider>
    )
}

export default App