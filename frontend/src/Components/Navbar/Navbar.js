import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
// import { doc, getDoc, collection } from "firebase/firestore";
import Nav from 'react-bootstrap/Nav';
import Header from 'react-bootstrap/Navbar';
import NavLogo from "../../Assets/images/NavLogo.png";
import { AuthContext } from '../../AuthProvider';
import { auth } from '../../firebase';


const Navbar = () => {
    const { user } = useContext(AuthContext); 
     
    
    return (
        <header>
            <Header expand='lg' collapseOnSelect className="d-flex">
                <div className='d-flex'>
                    <Header.Brand href="#home">
                        <img className="w-25" style={{"objectFit":"contain"}} src={NavLogo} alt="this is our logo" /> <span className="align-content-center mt-5"> MilkLucid</span>
                    </Header.Brand>
                </div>
                    <Header.Toggle aria-controls="basic-navbar-nav"  />
                    <Container>
                    <Header.Collapse className="justify-content-end" id="basic-navbar-nav">
                        
                        <Nav className="ml-auto">
                        
                            <Nav.Link className="mr-auto text-dark" href="/">Home</Nav.Link>
                            <Nav.Link className="mr-auto text-dark" href="/about-us">About Us</Nav.Link>
                            {
                                !user ? (
                                    <Nav.Link className="mr-auto text-dark" href="/signup">Login | Register</Nav.Link>
                                ) : 
                                <>
                                    <Nav.Link className="text-dark" onClick={()=>auth.signOut()}>Logout</Nav.Link>
                                    <Nav.Link className="mr-auto text-dark" href="/dashboard">Dashboard</Nav.Link>
                                </>
                            
                            }
                           

                        </Nav>
                    </Header.Collapse>
                </Container>
            </Header>
        </header>
    )
}

export default Navbar