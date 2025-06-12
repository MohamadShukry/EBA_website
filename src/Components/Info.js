import React from "react";
import InformationCard from "./InformationCard";
import { faUserGraduate, faBriefcase, faBuilding, faGlobe, faIdCard, faBook, faLanguage, faPlane } from '@fortawesome/free-solid-svg-icons';
import "../Styles/Info.css";

const Info = () => {
  const services = [
    { title: 'Student Visa Consultancy', description: 'Expert guidance on securing student visas for higher education in Europe and We help to select suitable career path for studies and settle in related countries', icon: faUserGraduate },
    { title: 'Business Visa Assistance', description: 'Comprehensive support for acquiring Business visas, facilitating international Business ventures in Europe.', icon: faBriefcase },
    { title: 'Work Visa Guidance', description: 'Tailored advice for obtaining working visas, enabling career opportunities across European countries.', icon: faBuilding },
    { title: 'Tourist & Visit Visas', description: 'Hassle-free application processes for Tourist and Visiting visas, making European travel dreams a reality.', icon: faGlobe },
    { title: 'Citizenship & Dual Citizenship', description: 'Assist with citizenship applications, including your overseas child citizenship and Dual citizenship, ensuring a seamless legal transition.', icon: faIdCard },
    { title: 'IELTS Classes', description: 'High-quality IELTS preparation courses designed to help students achieve the required scores for Visa applications.', icon: faBook },
    { title: 'Sworn Translation Services', description: 'Professional sworn translations services available for in English, Tamil, Sinhala and Arabic, essential for legal procedures.', icon: faLanguage },
    { title: 'Air Ticketing Services', description: 'Convenient Air Ticketing, Hotel Reservetions, and Airport pickup services for your stress-free travel experience.', icon: faPlane },
  ];

  return (
    <div className="parent-container" id="services">
      <div className="info-section">
        <div className="info-title-content">
          <h3 className="info-title">
            <span>What We Do</span>
          </h3>
          <p className="info-description">
          At the European Business Academy, we are dedicated to providing students with comprehensive support for their educational and career aspirations. Established in 2003, we specialize in overseas higher education visa consultancy, ensuring that students have the guidance they need to study abroad. Our services include expert IELTS classes designed to enhance language proficiency, sworn translation for official documents, air ticketing, and foreign birth certificate registration. With a decade of experience, our mission is to empower students with the resources and support they need to achieve their international academic and professional goals.
          </p>
        </div>

        <div className="cards-wrapper">
          {services.map((service, index) => (
            <InformationCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
