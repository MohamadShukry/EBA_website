import React from "react";
import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import "../Styles/Document.css"; // Import your CSS for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"; // Import the PDF icon
import "../Styles/Document.css";

function Documents() {
  // Define document data
  const documents = [
    {
      id: 1,
      title: "Career Path Form",
      description:"This form allows students to capture and summarize their past career experiences and key achievements.",
      file: "/Documents/CAREER_PATH.pdf",
    },
    {
      id: 2,
      title: "Sample Career Path Form",
      description: "A sample version of Career Path Form, providing guidance on how to complete the official document.",
      file: "/Documents/Sample.pdf",
    },
    {
      id: 3,
      title: "EBA Registration Form",
      description: "This form required to enroll in our programs.submit it with the necessary documents.",
      file: "/Documents/Registration_Form.pdf",
    },
    {
      id: 4,
      title: "Citizenship Declaration Form",
      description: "This is the official form required for citizenship declaration. You can also find and download this form from the official government website.",
      file: "/Documents/Citizenship_Declaration_Form_English.pdf",
    },
    {
      id: 5,
      title: "Citizenship Application Form",
      description: "This form is used to apply for citizenship officially. You can also access and download this form from the official government website.",
      file: "/Documents/Citizenship_Application_Form.pdf",
    },
    {
      id: 6,
      title: "Dual Citizenship Application Form",
      description: "This form is used to apply for dual citizenship. You can also find and download this official form from the government website.",
      file: "/Documents/New_Dual_Citizenship_Application_Form.pdf",
    },
    {
      id: 7,
      title: "Personal Particulars Form",
      description: "This form is used to provide personal details required for the citizenship application process. You can download this form from the government website.",
      file: "/Documents/Personal_Particulars_Form.pdf",
    },
    {
      id: 8,
      title: "Dual Citizenship Instructions",
      description: "This document provides detailed guidelines for applying for dual citizenship. You can also view or download it from the official government website.",
      file: "/Documents/Dual_Citizenship_Instructions_English.pdf",
    },
  ];

  // Function to render each document card
  const renderDocuments = () => {
    return documents.map((doc) => (
      <MDBCol key={doc.id} xl={4} lg={4} md={6} sm={12} className="mb-4">
        <MDBCard className="document-card">
          <MDBCardBody className="document-card-body">
            <div className="document-icon">
              <FontAwesomeIcon icon={faFilePdf} size="3x" />
            </div>
            <h5 className="document-title">{doc.title}</h5>
            <p className="document-description">{doc.description}</p>
            <MDBBtn href={doc.file} download className="download-button"
            
            style={{
              color:"white",
              backgroundColor:"#023436"
              
            }}>
              Download
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    ));
  };

  return (
    <div className="document-section" id="documents">
      <div className="document-title-content">
        <h3 className="document-title">
          <span>Documents For Dowload</span>
        </h3>
      </div>
      <div className="document-des">
       
        We provide the necessary documents for you to complete as part of your
        application process. Below, you will find download buttons for each
        required form and an example document to guide you. Please download and
        fill out the forms, then email the completed documents to <a href="mailto:ebasrilanka@gmail.com">ebasrilanka@gmail.com</a> Ensure to include your full name and any relevant
        reference numbers in your email for efficient processing. If you need
        any assistance or have questions, don't hesitate to contact us.
      </div>
      <MDBRow className="justify-content-center">
        {/* Render the Documents */}
        {renderDocuments()}
      </MDBRow>
    </div>
  );
}

export default Documents;
