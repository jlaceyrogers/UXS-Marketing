import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App" style={styles.appBackground}>
      <MyNavbar />
      <Home />
      <OurTeam />
      <OurWork />
      <ContactUs />
    </div>
  );
}

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#" style={styles.navLinkPadding} >UXS Marketing</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link style={styles.linkCursor} as={Link} to="homeSection" smooth={true} duration={500}>
            Home
          </Nav.Link>
          <Nav.Link style={styles.linkCursor} as={Link} to="teamSection" smooth={true} duration={500}>
            Our Team
          </Nav.Link>
          <Nav.Link style={styles.linkCursor} as={Link} to="workSection" smooth={true} duration={500}>
            Our Work
          </Nav.Link>
          <Nav.Link style={styles.linkCursor} as={Link} to="contactSection" smooth={true} duration={500}>
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function Home() {
  return (
    <div id="homeSection">
      {/* Home content */}
    </div>
  );
}

function OurTeam() {
  return (
    <div id="teamSection">
      {/* OurTeam content */}
    </div>
  );
}

function OurWork() {
  return (
    <div id="workSection">
      {/* OurWork content */}
    </div>
  );
} 

function ContactUs() {
  return (
    <div id="contactSection">
      {/* ContactUs content */}
    </div>
  );
}

const styles = {
  appBackground: {
    background: 'linear-gradient(45deg, #00A6FB 0%, #00A6FB 33%, #006494 33%, #006494 66%, #051923 66%, #051923 100%)',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0,
    left: 0,
  },
  linkCursor: {
    cursor: 'pointer',
  },
  navLinkPadding: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
};

export default App;
