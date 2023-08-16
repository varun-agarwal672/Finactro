import React from "react";
import {useNavigate} from "react-router-dom";
import '../styles/ConsultingVision.css';
import image from "../constants/cover2.jpg";

const ConsultingVision = () => {
    const navigate = useNavigate();
  
    const handleButtonClick = (targetPath) => {
      navigate(targetPath);
    };

    return (
      <div className="consulting-vision">
          <img src={image} className="background" />
        <div className="consulting-vision-content">
          <h2>UNLOCKING SUCCESS THROUGH <span style={{fontWeight : "bold"}}>FINACTRO'S CONSULTING VISION</span></h2>
          <p>
            Finactro is a global platform that provides unparalleled Accounting & Reporting Consulting services and ESG consulting,
            harnessing the exceptional capabilities of top-tier talent.
          </p>
          <div className="button-container">
            <h3>Dive into our service portfolio</h3>
            <div className="buttons">
              <button onClick={() => handleButtonClick('/accounting-reporting-consulting')}>ACCOUNTING & REPORTING CONSULTING</button>
              <button onClick={() => handleButtonClick('/esg-consulting')}>ESG CONSULTING</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ConsultingVision;
  