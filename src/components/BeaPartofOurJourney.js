import React from "react";
import {useNavigate} from "react-router-dom";
import '../styles/BeaPartofOurJourney.css';

const BeaPartofOurJourney = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = (targetPath) => {
    navigate(targetPath);
  };
    return (
      <div className="be-a-part-of-our-journey">
        <h2>BE A PART OF OUR INSPIRING JOURNEY</h2>
        <button onClick={() => handleButtonClick('/join-us')}>Join Us</button>
      </div>
    );
  };
  
  export default BeaPartofOurJourney;
  