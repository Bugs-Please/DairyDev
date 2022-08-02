import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Screens/LandingPage/LandingPage';
import Login from './Screens/Login/Login';
import Signup from './Screens/Signup/Signup';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={LandingPage} />
                {/* <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route> */}
            </Routes>
        </Router>
    )
}

export default App