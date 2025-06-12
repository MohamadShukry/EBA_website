import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../Styles/Reviews.css";
import f1 from "../Assets/feedback1.JPG";
import f2 from "../Assets/feedback2.jpg";
import f3 from "../Assets/feedback3.jpg";
import f4 from "../Assets/feedback4.jpg";
import f5 from "../Assets/kaveesha.jpeg";
import f6 from "../Assets/Nadeesha .jpg";
// import f7 from "../Assets/sahni.jpg";

function Reviews() {
  return (
    <div className="review-section" id="reviews">
      <div className="rw-text-content">
        <div className="rw-text-title">
          More than <span className="rw-text-num">300+ Clients</span>
        </div>
        <div className="rw-text-desc">
          Don't believe us, check clients' words
        </div>

        <MDBContainer fluid className="gradient-custom">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="12">
              <div className="text-center mb-4 "></div>
              <MDBCard
                style={{
                  // border: "none",
                  // boxShadow: "none",
                  // backgroundColor: "transparent",
                  justifyContent: "center",

                  width: "100%",
                }}
              >
                <MDBCardBody className="px-4 ">
                  <MDBCarousel showControls>
                    <MDBCarouselItem className="active">
                      <MDBRow className="d-flex justify-content-center">
                        <MDBCol lg="10" xl="8">
                          <MDBRow>
                            <MDBCol
                              lg="4"
                              className="d-flex justify-content-center align-items-center flex-column" // Add flex-column here
                            >
                              <img
                                src={f1}
                                className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                alt="woman avatar"
                                width="150"
                                height="150"
                              />
                              <div className="d-flex flex-column align-items-center mt-2">
                                {" "}
                                {/* Add mt-2 for spacing */}
                                <MDBIcon
                                  icon="plane-departure"
                                  className="plane mt-2"
                                  style={{ color: "#00C8BA" }}
                                />
                                <span style={{ color: "#023436" }}>The UK</span>
                              </div>
                            </MDBCol>
                            <MDBCol
                              md="9"
                              lg="7"
                              xl="8"
                              className="text-center text-lg-start mx-auto mx-lg-0"
                            >
                              <h4 className="mb-4">
                                Eaksha Nawanjani - <span>Akurassa Matara</span>
                              </h4>

                              <p className="mb-0 pb-3">
                                Very good service for and agent always He always
                                my every documentation. Participated to my visa
                                works. and gave me valuable ideas and
                                knowladgeable view. finally be completed my all
                                documents and gave it to my band then I
                                appricate his job and better services.
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                      </MDBRow>
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                      <MDBRow className="d-flex justify-content-center">
                        <MDBCol lg="10" xl="8">
                          <MDBRow>
                            <MDBCol
                              lg="4"
                              className="d-flex justify-content-center align-items-center flex-column" // Add flex-column here
                            >
                              <img
                                src={f2}
                                className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                alt="woman avatar"
                                width="150"
                                height="150"
                              />
                              <div className="d-flex flex-column align-items-center mt-2">
                                {" "}
                                {/* Add mt-2 for spacing */}
                                <MDBIcon
                                  icon="plane-departure"
                                  className="plane mt-2"
                                  style={{ color: "#00C8BA" }}
                                />
                                <span style={{ color: "#023436" }}>
                                  Singapore
                                </span>
                              </div>
                            </MDBCol>
                            <MDBCol
                              md="9"
                              lg="7"
                              xl="8"
                              className="text-center text-lg-start mx-auto mx-lg-0"
                            >
                              <h4 className="mb-4">
                                Anwar Ifham -{" "}
                                <span>Ethungahakotuwa Kuliyapitiya</span>
                              </h4>
                              <p className="mb-0 pb-3">
                                Good service for and agent always He always my
                                every documentation. Participated to my visa
                                works. and gave me valuable ideas and
                                knowladgeable view. finally be completed my all
                                documents and gave it to my band then I
                                appricate his job and better services.
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                      </MDBRow>
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                      <MDBRow className="d-flex justify-content-center">
                        <MDBCol lg="10" xl="8">
                          <MDBRow>
                            <MDBCol
                              lg="4"
                              className="d-flex justify-content-center align-items-center flex-column" // Add flex-column here
                            >
                              <img
                                src={f3}
                                className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                alt="woman avatar"
                                width="150"
                                height="150"
                              />
                              <div className="d-flex flex-column align-items-center mt-2">
                                {" "}
                                {/* Add mt-2 for spacing */}
                                <MDBIcon
                                  icon="plane-departure"
                                  className="plane mt-2"
                                  style={{ color: "#00C8BA" }}
                                />
                                <span style={{ color: "#023436" }}>
                                  Singapore
                                </span>
                              </div>
                            </MDBCol>
                            <MDBCol
                              md="9"
                              lg="7"
                              xl="8"
                              className="text-center text-lg-start mx-auto mx-lg-0"
                            >
                              <h4 className="mb-4">
                                Rukshan Dinoth - <span>Nawalapitiya Kandy</span>
                              </h4>
                              <p className="mb-0 pb-3">
                                European Business Academy is an excellent choice
                                for overseas visa and related services. Mr.
                                Ahamed’s support ensured my documents were
                                completed successfully, and he also provided
                                essential relocation assistance. He kept me
                                consistently updated, and I can confidently say
                                no other institute offers such dedicated
                                service. Highly recommended, and the investment
                                here is truly worth it. Best wishes to Mr.
                                Ahamed and the academy!
                              </p>
                              
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                      </MDBRow>
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                      <MDBRow className="d-flex justify-content-center">
                        <MDBCol lg="10" xl="8">
                          <MDBRow>
                            <MDBCol
                              lg="4"
                              className="d-flex justify-content-center align-items-center flex-column"
                            >
                              <img
                                src={f4}
                                className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                alt="woman avatar"
                                width="150"
                                height="150"
                              />
                              <div className="d-flex flex-column align-items-center mt-2">
                                {" "}
                                {/* Add mt-2 for spacing */}
                                <MDBIcon
                                  icon="plane-departure"
                                  className="plane mt-2"
                                  style={{ color: "#00C8BA" }}
                                />
                                <span style={{ color: "#023436" }}>Canada</span>
                              </div>
                            </MDBCol>
                            <MDBCol
                              md="9"
                              lg="7"
                              xl="8"
                              className="text-center text-lg-start mx-auto mx-lg-0"
                            >
                              <h4 className="mb-4">
                                Supun Chathuranga -{" "}
                                <span>Nikadalupotha Kurunagala</span>
                              </h4>
                              <p className="mb-0 pb-3">
                                Mr. Ahamed my Consultant was always one step
                                ahead of me. He always knew what is about to
                                happen and Yet to come. At some on you would
                                realise as matter of fact it has always point as
                                time. I assure this company is a complete
                                package what you always expect them to be I
                                would recommend their service in blink of an eye
                                to any student who is willing to pursue their
                                dreams in another territory
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                      </MDBRow>
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                      <MDBRow className="d-flex justify-content-center">
                        <MDBCol lg="10" xl="8">
                          <MDBRow>
                            <MDBCol
                              lg="4"
                              className="d-flex justify-content-center align-items-center flex-column"
                            >
                              <img
                                src={f5}
                                className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                alt="woman avatar"
                                width="150"
                                height="150"
                              />
                              <div className="d-flex flex-column align-items-center mt-2">
                                {" "}
                                {/* Add mt-2 for spacing */}
                                <MDBIcon
                                  icon="plane-departure"
                                  className="plane mt-2"
                                  style={{ color: "#00C8BA" }}
                                />
                                <span style={{ color: "#023436" }}>The UK</span>
                              </div>
                            </MDBCol>
                            <MDBCol
                              md="9"
                              lg="7"
                              xl="8"
                              className="text-center text-lg-start mx-auto mx-lg-0"
                            >
                              <h4 className="mb-4">
                                Kaveesha Vijayangi -{" "}
                                <span>Kadawatha Colombo</span>
                              </h4>
                              <p className="mb-0 pb-3">
                                It was easy & pleasant to work with my
                                consultant Mr. Ahamed. He always guided us even
                                in very small documentation from begining to
                                end. Step wise process was explained before hand
                                therefore it was Smooth & Clean without any last
                                minute surprises until visa granted. I would
                                recommend European Business Academy as a highly
                                visa granted agency to any student who is
                                willing to travel abroad. It is a place with an
                                experienced agent.and a Supportive environment
                                to any student.
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                      </MDBRow>
                    </MDBCarouselItem>

                    <MDBCarouselItem>
                      <MDBRow className="d-flex justify-content-center">
                        <MDBCol lg="10" xl="8">
                          <MDBRow>
                            <MDBCol
                              lg="4"
                              className="d-flex justify-content-center align-items-center flex-column"
                            >
                              <img
                                src={f6}
                                className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                alt="woman avatar"
                                width="150"
                                height="150"
                              />
                              <div className="d-flex flex-column align-items-center mt-2">
                                {" "}
                                {/* Add mt-2 for spacing */}
                                <MDBIcon
                                  icon="plane-departure"
                                  className="plane mt-2"
                                  style={{ color: "#00C8BA" }}
                                />
                                <span style={{ color: "#023436" }}>
                                  The USA / Canada
                                </span>
                              </div>
                            </MDBCol>
                            <MDBCol
                              md="9"
                              lg="7"
                              xl="8"
                              className="text-center text-lg-start mx-auto mx-lg-0"
                            >
                              <h4 className="mb-4">
                                Nadeesha Dilani - <span>Poddala Galle</span>
                              </h4>
                              <p className="mb-0 pb-3">
                                I met Mr. Ahamed through one of my friend Who
                                went to England. During the first discussion he
                                gave me all of information about tourist Visa
                                Procedures. He has done my all of Documentation
                                to Canada and America embassies in Smoothly and
                                clean. His experience and knowledge helped me to
                                obtained visas to America and Canada in once. I
                                would recommend European Business Academy as a
                                highly visa granted Consultant to any clients.
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                      </MDBRow>
                    </MDBCarouselItem>
                  </MDBCarousel>
                </MDBCardBody>
              </MDBCard>
              <div className="text-center mt-4 pt-2"></div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}

export default Reviews;
