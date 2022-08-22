import React, { useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import { doc, getDoc, collection } from "firebase/firestore";
import Nav from 'react-bootstrap/Nav';
import Header from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLogo from "../../Assets/images/NavLogo.png";
import { AuthContext } from '../../AuthProvider';
import { auth, db } from '../../firebase';


const Navbar = () => {
    const { user } = useContext(AuthContext); 
     
    
    return (
        <header>
            <Header expand='lg' collapseOnSelect className="d-flex">
                <div className='d-flex'>
                    <Header.Brand href="#home">
                        <img className="w-25" style={{"objectFit":"contain"}} src={NavLogo} alt="this is our logo" /> <span className="align-content-center mt-5"> DairyDev</span>
                    </Header.Brand>
                </div>
                    <Header.Toggle aria-controls="basic-navbar-nav"  />
                    <Container>
                    <Header.Collapse className="justify-content-end" id="basic-navbar-nav">
                        
                        <Nav className="ml-auto">
                        
                            <Nav.Link className="mr-auto text-dark" href="#home">Home</Nav.Link>
                            <Nav.Link className="mr-auto text-dark" href="#AboutUs">About Us</Nav.Link>
                            {
                                !user ? (
                                    <NavDropdown className="mr-auto text-dark" title="Login | Register" >
                                
                                    <NavDropdown.Item className="text-dark" href="/login">
                                        Farmer
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className="text-dark" href="/signup">Co-Operative</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="text-dark" href="/signup">
                                        Processing Unit
                                    </NavDropdown.Item>
                                </NavDropdown>
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