import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhyUs from "./WhyUs";
import CoverIntro from "./CoverIntro.js";
import Description from "./Description";
import cover from "../constants/esg-cover.jpg";
import image1 from "../constants/esg-pic.jpg";

const ESGConsulting = () => {
    const listItems = {
        header : "Why Choose Us?",
        intro : "At Finactro, we firmly believe that a simple shift in how companies approach sustainability can open doors to boundless opportunities. Here's why we stand out:",
        items : [
            {
                key : "Deep Expertise",
                value : "Our ESG team brings extensive experience in partnering with diverse businesses and government entities worldwide on their ESG and climate change journeys. This invaluable expertise equips us to understand your needs strategically and practically.",
            },
            {
                key : "Execution Excellence",
                value : "We prioritize delivering tangible results by developing, supporting, and promoting tailored mitigation and adaptation strategies that align with your business goals.",
            },
            {
                key : "Scientific Rigor, Corporate Pragmatism",
                value : "Our approaches are grounded in scientifically tested methods, combined with a keen focus on ensuring corporate viability and profitability. This enables us to provide accessible, timely, and business decision-relevant services rooted in relevant climate science.",
            },
            {
                key : "Multidisciplinary Approach",
                value : "With a diverse and global team of experts and strategic partners, we prioritize achieving impactful outcomes. Our multidisciplinary perspective allows us to address your requirements holistically, ensuring comprehensive and effective solutions.",
            },
            {
                key : "Technology-Enabled Sustainability",
                value : "Leveraging ESG tech platforms, we have the capabilities to solve data management and integrity challenges. Our integration of technology facilitates seamless sustainability practices and empowers informed decision-making.",
            }
    ]
};
    const intro = {
        image : cover,
        text : "Incorporate Sustainability: The Essential Key to Thriving Business",
        title : "ESG CONSULTING"
    }

    const description = [{
        image : image1,
        desc : "Our ESG practice, built on the rich practical experience of SustainPlus and integrated into Finactro, offers comprehensive end-to-end services in ESG, Climate Action, and Corporate Responsibility. Our mission is to guide the transformation towards sustainability in both business and society, shaping a more balanced planet for future generations."
    }]
    return (
        <div>
            <Navbar />
            <CoverIntro props={intro} />
            <Description props={description} />
            <WhyUs props={listItems} />
            <Footer />
        </div>
    )
}

export default ESGConsulting;