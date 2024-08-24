import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Cartlogooffcanvas from './Cartlogooffcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { signupcontext } from './../context/signup/contextsignup';


import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
defineElement(lottie.loadAnimation);

export default function NavigationBar() {



  return (
    <>
      <Navbar expand="lg" sticky="top" className="py-0 bg-amber-300" >
        <Container>



          <Navbar.Brand href="" className='flex items-center'>
            {/* <img
              alt=""
              src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
              width="30"
              height="30"
              className="d-inline-block align-top rounded-circle"
            />{' '} */}
           
            <lord-icon
    src="https://cdn.lordicon.com/sncsryxo.json"
    trigger="hover"
    colors="primary:#5c230a,secondary:#e86830"
    style={{ width: '60px', height: '60px'}}>

</lord-icon>
            <Link to="/" className='text-decoration-none '><h2 className="m-0 text-dark font-serif font-bold" >Furn.</h2></Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav my-2" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              {/* dropdown 1 */}
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" className='fw-bold'>
                  Products
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ backgroundColor: "#fee2e2 " }}>
                  <Dropdown.Item ><Link className='nav-link fw-bold' to="/type1">Plants</Link></Dropdown.Item>
                  <Dropdown.Item ><Link className='nav-link fw-bold' to="/type2">Pots</Link></Dropdown.Item>
                  <Dropdown.Item ><Link className='nav-link fw-bold' to="/type2">Flower Seeds</Link></Dropdown.Item>
                  <Dropdown.Item ><Link className='nav-link fw-bold' to="/type3">Herbs</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* dropdown 1 */}
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" className='fw-bold' >
                  Services
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ backgroundColor: "#ffeaa9" }}>
                  <Dropdown.Item ><Link className='nav-link fw-bold' to="/type1" >Book Home Appointment</Link></Dropdown.Item>
                  <Dropdown.Item ><Link className='nav-link fw-bold' to="/type2" >Book A session</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>



              {/* dropdown 1 */}
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" style={{ fontWeight: "bold" }}>
                  Policies
                </Dropdown.Toggle>
                <Dropdown.Menu className='bg-red-400'>
                  <Dropdown.Item ><Link className='nav-link fw-bold' to="/type1" >About Us</Link></Dropdown.Item>
                  <Dropdown.Item ><Link className='nav-link fw-bold' to="/type2" >Shipping Policy</Link></Dropdown.Item>
                  <Dropdown.Item ><Link className='nav-link fw-bold' to="/type3" >Privacy Policy</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* dropdown 1 */}
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" className="fw-bold" >
                  Other
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ backgroundColor: "#ffeaa9" }}>
                  <Dropdown.Item ><Link className='nav-link fw-bold' to="/blog" >Blog</Link></Dropdown.Item>
                  <Dropdown.Item ><Link className='nav-link fw-bold' to="/contactus" >Contact Us</Link></Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
              
              <Dropdown >
                <Dropdown.Toggle variant="" id="dropdown-basic" className="fw-bold">
                  <FaUser style={{ fontSize: "20px", display:'inline' }}   />
                </Dropdown.Toggle>
                <Dropdown.Menu >
                  <Dropdown.Item ><Link className='nav-link fw-bold' to="/login" >Log In</Link></Dropdown.Item>
                  <Dropdown.Item ><Link className='nav-link fw-bold' to="/register" >Register</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>




              {/* icon of account */}
              <button className='btn btn-dark my-3'><Link to="/searchinput" className='text-decoration-none text-light'>Search</Link></button>

              <FaUser style={{ fontSize: "20px" }} className='mx-3' />

              {/* <Cartlogooffcanvas /> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </>
  )
}
