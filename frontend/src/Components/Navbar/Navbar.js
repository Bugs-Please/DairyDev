import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Header from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../Assets/images/Logo.png";
const Navbar = () => {
    return (
        <header>
            <Header expand='lg' collapseOnSelect className="d-flex">
                <div className='d-flex'>
                    <Header.Brand href="#home">
                        <img style={{"objectFit":"contain"}} src={Logo} alt="this is our logo" /> <span className="align-content-center mt-5"> DairyDev</span>
                    </Header.Brand>
                </div>
                    <Header.Toggle aria-controls="basic-navbar-nav" />
                    <Container>
                    <Header.Collapse className="justify-content-end" id="basic-navbar-nav">
                        
                        <Nav className="ml-auto">
                        
                            <Nav.Link className="mr-auto" href="#home">Home</Nav.Link>
                            <Nav.Link className="mr-auto" href="#Dashboard">Dashboard</Nav.Link>
                            <Nav.Link className="mr-auto" href="#AboutUs">About Us</Nav.Link>
                            <NavDropdown className="mr-auto" title="Login | Register" >
                                
                                <NavDropdown.Item href="#action/3.1">
                                    Farmer
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Co-Operative</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">
                                    Processing Unit
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Header.Collapse>
                </Container>
            </Header>
        </header>
    )
}

export default Navbar