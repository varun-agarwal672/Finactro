import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CoverIntro from "./CoverIntro.js";
import cover from "../constants/joinus-cover.jpg";
import image1 from "../constants/joinus-pic1.jpg";
import image2 from "../constants/joinus-pic2.jpg"; 
import "../styles/JoinUs.css";

const intro = {
  image: cover,
  title: "JOIN US",
};
const listItems = [
  {
        title: "Experienced Leadership Team",
        content: "Our leadership team, consisting of industry veterans, brings deep expertise and a proven track record in the ARC and ESG field. They are recognized as thought leaders who have successfully built businesses from scratch.",
  },
  {
        title: "Exclusive Focus",
        content: "We have a clear focus on ARC and ESG. Our investments are fully allocated to these areas, allowing us to stay at the forefront of developments and identify talent in these specialized domains.",
  },
  {
        title: "Integrated Consulting & Technology",
        content: "We seamlessly integrate consulting and technology to provide our talent with a unique multidisciplinary experience. This approach enables us to deliver comprehensive solutions to our clients.",
  },
  {
        title: "Global Reach",
        content: "Our flexible and collaborative work model empowers talent to work remotely and seamlessly across borders. This global perspective benefits both our clients and our people.",
  },
  {
        title: "No Conflict of Interest",
        content: "With our exclusive focus on consulting & advisory services, our talent is not constrained by auditor independence conflicts, ensuring the freedom to deliver innovative solutions.",
  },
  {
        title: "Convergence of ARC & ESG",
        content: "We believe that financial and non-financial data will seamlessly converge in the future, driving external reporting and internal decision-making. Our talent will have the opportunity to experience this convergence and contribute to projects across our two core businesses.",
  },
  {
        title: "Agility and Stability",
        content: "Finactro combines the agility of a startup with the stability and scale of a well-funded company backed by respected institutional investors. Our talent enjoys a dynamic work environment with minimal bureaucracy.",
  },
  {
        title: "Competitive Compensation",
        content: "We offer market-leading compensation packages and provide our talent with the opportunity to be part of value creation.",
  },
];

const JoinUs = () => {
  return (
    <div className="join-us">
      <Navbar />
      <CoverIntro props={intro} />
      <div className="reason">
        <div className="why-finactro-container">
          <div className="why-finactro">
            <h2>Why Finactro?</h2>
            <h3>
              At Finactro, we offer a compelling opportunity for talent in the
              ARC and ESG space and here's why you should consider being a part
              of our journey :
            </h3>
            <ul>
                {listItems.slice(0,5).map((item,index) => (
                    <li key={index}>
                        <strong>{item.title} : </strong>{item.content}
                    </li>
                ))}
            </ul>
          </div>
          <img src={image1} />
        </div>
        <div className="why-finactro-container reverse" >
            <img src={image2} />
            <div className="why-finactro">
                <ul>
                    {listItems.slice(5).map((item,index) => (
                        <li key={index}>
                            <strong>{item.title} : </strong>{item.content}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
      <div className="join">
        <h3>If you are a consultant or a leader in the ESG or ARC space who resonates with our purpose, vision & values and is interested in transforming the consulting landscape, we invite you to get in touch with us.</h3>
        <ul>
            <li>If you are interested in joining our practice, reach out to us at <a href="mailto:humanresource@finactro.com" target="_blank">humanresource@finactro.com</a></li></ul>
      </div>
      <Footer />
    </div>
  );
};

export default JoinUs;
