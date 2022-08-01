import React from 'react'
import { 
  BrowserRouter as Router, 
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Screens/LandingPage/LandingPage';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path = '/' element = {LandingPage} />
            </Routes>
        </Router>
    )
}

export default App