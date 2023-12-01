import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import './SideNavBar.css'; 

function SideNavBar() {
  const [isHovered, setHover] = useState(false);

  return (
    <div className="side-nav-container">
                  <Navbar>
                    <Container style={{ display: 'flex', flexDirection: 'column' }}>
                        <Navbar.Brand href="#home" className="nav-brand">
                          Hello Nada!
                        </Navbar.Brand>

                        <Image
                          className="profile-image"
                          src="https://cdn-icons-png.flaticon.com/512/3449/3449633.png"
                          roundedCircle
                        />
                      
                        <Nav className="me-auto" style={{ display: 'flex', flexDirection: 'column' }}>
                          <Link to="/lookfortutor" className="nav-link">
                            Look for Tutor
                          </Link>
                          <Link to="/makeappointment" className="nav-link">
                            Make Appointment Request
                          </Link>
                          <Link to="/ratetutor" className="nav-link">
                            Rate a Tutor
                          </Link>
                          <Link to="/tutoringreqapplication" className="nav-link">
                            Tutoring Request Application
                          </Link>
                          <Link to="/studentdash" className="nav-link">
                            My Dashboard
                          </Link>
                        </Nav>
                    
                        <Link to="/switchtotutor" className="nav-link">
                            <button className="switch-button" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
                              Switch
                            </button>
                        </Link>


                    </Container>
                  </Navbar>
    </div>
  );
}

export default SideNavBar;


