import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import DirectorSVG from "../Assets/About.svg";
import "../Styles/About.css";

export default function About() {
  return (
    <div id="about">
      <div className="about-title">Voice Of Managing Director</div>
      <MDBContainer id="container"
      style={{
        
        // Corrected camelCase property
       alignItems: "flex-start", // Corrected camelCase property
       width: "100%", 
       maxWidth: "100%", // Optional: to limit the maximum width
       margin: "0 auto", // Center the container horizontally
       backgroundColor: "white", // Corrected camelCase property
       border: "1px solid #ddd",
       borderRadius: "8px", // Border radius for rounded corners
       boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
       
       
     }}
      >
        <div className="about-content">
          <div className="about-image-container">
            <img
              src={DirectorSVG}
              alt="Director"
              className="about-image"
              aria-label="Director Image"
            />
          </div>
          <div className="about-text">
            <p className="about-description">
              At European Business Academy, our commitment to quality education
              and training has led to the growth of our student numbers to over
              1500 around the world. The range of education and training courses
              includes Accounting, Business, Finance, Hospitality, Tourism,
              Information Technology, Computing, Management, and English Language
              Programmes. As a European Business Academy student, you will be part
              of a vibrant city-center campus and community that represents a
              variety of nationalities, cultures, and religious beliefs. This
              diversity fosters understanding, confidence, and the development of
              meaningful relationships. By emphasizing the development of
              professional and entrepreneurial skills, our graduates are equipped
              to approach problems with creative, practical solutions and assume
              leadership roles. Modern telecommunication facilities ensure that
              wherever you choose to study, you will receive the total support of
              European Business Academy. The unique partnership of our management,
              academics, staff, and students creates an environment conducive to
              fun, creativity, teamwork, communication, knowledge, and broad-based
              skills development. I look forward to welcoming you to European
              Business Academy as you embark on your journey to develop both your
              professional and personal life.
            </p>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
}
