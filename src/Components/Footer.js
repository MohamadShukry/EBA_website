import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

import "../Styles/Footer.css";

export default function Footer() {
  return (
    <MDBFooter
      style={{ backgroundColor: "#037971" }}
      className="text-center text-lg-start text-muted"
    >
      <section className="" style={{ padding: "1px", color: "white" }}>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" >
                
                European Business Academy
              </h6>
              <p >
                European Business Academy, established in 2003, offers expert
                Visa consultancy, IELTS classes, Air Ticketing and Sworn Translations services.
                With over Two decades of experience, We help students and Clients smoothly
                settle in Europe, ensuring their success every steps in Visa handling.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4" >
              <h6 className="text-uppercase fw-bold mb-4 text-left">
                Services
              </h6>
              <p className="text-left">
                <a href="#!" className="text-reset">
                  Student Visa Consultancy
                </a>
              </p>
              <p className="text-left">
                <a href="#!" className="text-reset">
                  Business Visa Assistance
                </a>
              </p>
              <p className="text-left">
                <a href="#!" className="text-reset">
                  Work Visa Guidance
                </a>
              </p>
              <p className="text-left">
                <a href="#!" className="text-reset">
                  Citizenship & Dual Citizenship
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-left">
                Services
              </h6>
              <p className="text-left">
                <a href="#!" className="text-reset">
                  Tourist & Visit Visas
                </a>
              </p>
              <p className="text-left">
                <a href="#!" className="text-reset">
                  IELTS Classes
                </a>
              </p>
              <p className="text-left">
                <a href="#!" className="text-reset">
                  Sworn Translation Services
                </a>
              </p>
              <p className="text-left">
                <a href="#!" className="text-reset">
                  Air Ticketing & Airport Services
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="white" icon="home" className="me-2" />
                No 650, Hospital Road, Jaffna.
              </p>
              <p>
                <MDBIcon color="white" icon="envelope" className="me-3" />
                ebasrilanka@gmail.com
              </p>
              <p>
                <MDBIcon color="white" icon="phone" className="me-3" />{" "}
                +9471 689 7855
              </p>
              <p>
                <MDBIcon color="white" icon="phone" className="me-3" />{" "}
                +9477 503 7855
              </p>
              <p>
                <MDBIcon color="white" icon="fax" className="me-3" />{" "}
                +021 431 7886 
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <section className='d-flex justify-content-center p-4 border-bottom'>
  <div className='d-flex justify-content-center'>
    <MDBBtn
      floating
      className='m-1'
      style={{ backgroundColor: '#ffffff' }} // White background
      href='#!'
      role='button'
    >
      <MDBIcon fab icon='facebook-f' style={{ color: '#037971' }} /> {/* Icon color */}
    </MDBBtn>

    <MDBBtn
      floating
      className='m-1'
      style={{ backgroundColor: '#ffffff' }} // White background
      href='#!'
      role='button'
    >
      <MDBIcon fab icon='twitter' style={{ color: '#037971' }} /> {/* Icon color */}
    </MDBBtn>

    <MDBBtn
      floating
      className='m-1'
      style={{ backgroundColor: '#ffffff' }} // White background
      href='#!'
      role='button'
    >
      <MDBIcon fab icon='google' style={{ color: '#037971' }} /> {/* Icon color */}
    </MDBBtn>

    <MDBBtn
      floating
      className='m-1'
      style={{ backgroundColor: '#ffffff' }} // White background
      href='#!'
      role='button'
    >
      <MDBIcon fab icon='instagram' style={{ color: '#037971' }} /> {/* Icon color */}
    </MDBBtn>

    <MDBBtn
      floating
      className='m-1'
      style={{ backgroundColor: '#ffffff' }} // White background
      href='#!'
      role='button'
    >
      <MDBIcon fab icon='linkedin-in' style={{ color: '#037971' }} /> {/* Icon color */}
    </MDBBtn>

    <MDBBtn
      floating
      className='m-1'
      style={{ backgroundColor: '#ffffff' }} // White background
      href='#!'
      role='button'
    >
      <MDBIcon fab icon='github' style={{ color: '#037971' }} /> {/* Icon color */}
    </MDBBtn>
  </div>
</section>


      <div
        className="text-center p-4"
        style={{ backgroundColor: "#023436", color: "white" }}
      >
        © 2004 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          European Business Academy
        </a>
      </div>
    </MDBFooter>
  );
}
