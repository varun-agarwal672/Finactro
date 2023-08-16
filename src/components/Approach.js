import React from "react";
import '../styles/Approach.css';
import approach from "../constants/approach3.jpg"

const Approach = () => {
    return (
      <div className="approach-section">
        <div className="list-section">
          <h2>FINACTRO'S APPROACH</h2>
          <ul>
            <li>
              <strong>Envision</strong> - Consider us your partners, seamlessly integrated with your business. Our approach is built on collaboration, actively listening to your needs.
            </li>
            <li>
              <strong>Resolve</strong> - Armed with extensive domain knowledge and practical experience, we are driven to find solutions. We tackle the challenges you encounter head-on.
            </li>
            <li>
              <strong>Execute</strong> - Our focus lies in efficient implementation, ensuring measurable and impactful results. We strive for excellence in delivering outcomes.
            </li>
            <li>
              <strong>Innovate</strong> - We value feedback and embrace continuous learning from our collective experiences. Together, we evolve and explore new frontiers.
            </li>
          </ul>
          <a href="/contact-us"><button>Reach Out to Us</button></a>
        </div>
        <div className="image-section">
          <img src={approach} alt="Finactro's Approach" />
        </div>
      </div>
    );
  };
  
  export default Approach;
  