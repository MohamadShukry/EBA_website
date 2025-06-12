
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from '../Assets/logo.png';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from "mdb-react-ui-kit";

function Navbar() {
  const [nav, setNav] = useState(false); // State for toggling collapse

  const handleNavbarToggle = () => {
    console.log("Navbar state before toggle:", nav); // Log the state before toggling
    setNav(!nav); // Toggle the navbar state
    console.log("Navbar state after toggle:", !nav); // Log the state after toggling
  };

  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light"  >
        <MDBContainer fluid>
          {/* Navbar Brand */}
          <MDBNavbarBrand href="#hero">
            <img
              src={logo}// Replace with your logo path
              height="35"
              alt="European Business Academy Logo"
              loading="lazy"
              style={{ marginRight: "15px",marginLeft: "20px"  }}
            />
            
            <span  className="navbar-brand-text" style={{ fontFamily: 'cursive', color: '#037971', fontStyle:'italic', fontSize:'25px'  }}>
              European Business Academy
            </span>
          </MDBNavbarBrand>

          <MDBNavbarToggler
            className='ms-auto'
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setNav(!nav)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>


          <MDBCollapse navbar show={nav} style={{ justifyContent:'end' }} >
            <MDBNavbarNav className="d-flex justify-content-end">
              <MDBNavbarItem>
                <MDBNavbarLink href="#hero" style={{ transition: "color 0.3s ease",color: "#00C8BA" }}
                  onMouseEnter={(e) => e.target.style.color = "#00C8BA"}
                  onMouseLeave={(e) => e.target.style.color = ""}>Home</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#services" style={{ transition: "color 0.3s ease",color: "#023436" }}
                  onMouseEnter={(e) => e.target.style.color = "#00C8BA"}
                  onMouseLeave={(e) => e.target.style.color = "#023436"}>Services</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#about" style={{ transition: "color 0.3s ease",color: "#023436" }}
                  onMouseEnter={(e) => e.target.style.color = "#00C8BA"}
                  onMouseLeave={(e) => e.target.style.color = "#023436"}>About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#reviews" style={{ transition: "color 0.3s ease",color: "#023436" }}
                  onMouseEnter={(e) => e.target.style.color = "#00C8BA"}
                  onMouseLeave={(e) => e.target.style.color = "#023436"}>Reviews</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#documents" style={{ transition: "color 0.3s ease",color: "#023436" }}
                  onMouseEnter={(e) => e.target.style.color = "#00C8BA"}
                  onMouseLeave={(e) => e.target.style.color = "#023436"}>Documents</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#team" style={{ transition: "color 0.3s ease",color: "#023436" }}
                  onMouseEnter={(e) => e.target.style.color = "#00C8BA"}
                  onMouseLeave={(e) => e.target.style.color = "#023436"}>Team</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#partners" style={{ transition: "color 0.3s ease" ,color: "#023436"}}
                  onMouseEnter={(e) => e.target.style.color = "#00C8BA"}
                  onMouseLeave={(e) => e.target.style.color = "#023436"}>Partners</MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Navbar;