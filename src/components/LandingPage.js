import React from "react";
import ConsultingVision from "./ConsultingVision";
import Approach from "./Approach";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FlowChart from "./FlowChart";
import BeaPartofOurJourney from "./BeaPartofOurJourney";

const LandingPage = () => {
    return (
    <div >
      <Navbar/>
      <ConsultingVision/>
      <FlowChart/>
      <Approach/>
      {/* <Founders/> */}
      <BeaPartofOurJourney/>
      <Footer/>
    </div>
    );
  };
  
  export default LandingPage;
  