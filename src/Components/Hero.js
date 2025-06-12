
import React, { useEffect, useState } from "react";
import Doctor from "../Assets/hero.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container" id="hero">
      <div className="hero-section">
        <div className="text-section">

          <p className="text-descritpion">
            <span className="unique-span">
              Welcome to 
              European 
              Business
              Academy!</span>{" "}
             We are your trusted partner in
            navigating the complexities of international education,travel, and
            legal immigration advice services. including expert visa
            consultancy, high-quality IELTS exams preparation, and professional sworn
            translations, are designed to support your aspirations in Europe, USA, Canada, Australia, New Zealand, Singapore and Malaysia.
            Whether you're pursuing education, business, or travel, our
            dedicated team ensures a seamless experience, guiding you every steps
            of the way. Start your journey with confidence, backed by our
            expertise and commitment to your success.
          </p>


          <div className="text-stats">
            <div className="text-stats-container">
              <p>300+</p>
              <p>Clients & Students</p>
            </div>

            <div className="text-stats-container">
              <p>5+</p>
              <p>Expert Consultance</p>
            </div>

            <div className="text-stats-container">
              <p>22+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;




