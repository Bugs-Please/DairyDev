import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import Dashboard from './Screens/Dashboard/Dashboard';
// import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Screens/LandingPage/LandingPage';
import Login from './Screens/Login/Login';
import Signup from './Screens/Signup/Signup';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path = "/" element={<LandingPage />} />
                <Route path = "/login" element={<Login />} />
                <Route path = "/signup" element={<Signup />} />
                <Route path = "/dashboard" element={<Dashboard/>} />
            </Routes>
        </Router>
    )
}

export default App