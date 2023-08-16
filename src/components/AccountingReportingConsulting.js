import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhyUs from "./WhyUs";
import CoverIntro from "./CoverIntro.js";
import Description from "./Description";
import cover from "../constants/arc-cover.jpg";
import image1 from "../constants/chart.jpg";
import image2 from "../constants/arc-pic.jpg";

const AccountingReportingConsulting = () => {
    const listItems = {
        header : "Why Finactro?",
        intro : "At Finactro, we understand that the finance function plays a pivotal role in establishing transparency and trust within a company. Here's why we are your ideal partner:",
        items : [
            {
              key: "Thought Leaders",
              value: "Our founders collectively bringing over 20 years of experience, we possess a unique understanding of your strategic and practical requirements.",
            },
            {
              key: "Diverse Talent Pool",
              value: "Our extensive global talent pool comprises of teams who worked with prominent accounting advisory, audit, finance transformation, technology practices of Big 4 firms and other renowned consulting and technology companies worldwide. This integrated talent pool operates across key markets in India, and the Middle East.",
            },
            {
              key: "Multidisciplinary Approach",
              value: "Our multidisciplinary team of experts and strategic partners, aligned with specific sectors, prioritizes delivering impactful solutions and approaches your requirements holistically.",
            },
            {
              key: "Integration Of Financial and Non-Financial Data",
              value: "We foresee the convergence of financial and non-financial data for both external and internal reporting, driven by increased regulatory disclosures around ESG (Environmental, Social, and Governance) data. With our focus on ARC and ESG, we are uniquely positioned to guide clients through this integrated journey.",
            },
            {
              key: "Technology-led Solutions",
              value: "Our technology-led approach enables us to provide not only strategic advice but also end-to-end implementation assistance. Leveraging our understanding and strategic partnerships with tech platforms, we address automation, data management, and integrity challenges within the finance function.",
            },
        ]
    };

    const intro = 
        {
            image : cover,
            text : "Digital Transformation in Finance in India",
            title : "ACCOUNTING & REPORTING CONSULTING"
        }
    const desc = [
      {
        image : image1,
        desc : "In the rapidly evolving business landscape, accounting and reporting standards and regulations are constantly changing. The finance function faces increasing reporting requirements, faster timelines, and the need for automation. Finactro's Accounting & Reporting Consulting (ARC) practice serves as an extension of your team, partnering with the finance function."
      },
      {
        image : image2,
        desc : "Our global talent pool brings deep expertise in finance, providing technical know-how, skills, technology, and bandwidth to navigate challenges in real-time, minimizing additional manpower costs. We possess a comprehensive understanding of multi-geographical accounting frameworks such as US GAAP, IFRS, Ind AS, and country-specific regulations. Finance Function Digitization Services in India."
      }
  ]
    return (
        <div>
            <Navbar />
            <CoverIntro props={intro} />
            <Description props={desc} />
            <WhyUs props={listItems} />
            <Footer />
        </div>
    );
}

export default AccountingReportingConsulting;