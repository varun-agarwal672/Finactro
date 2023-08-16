import React from "react";
import '../styles/Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
      <footer className="footer">
      <div className="footer-section-container">
          <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
          </ul>
          </div>
          <div className="footer-section">
            <h3>Our Services</h3>
            <ul>
              <li><a href="/accounting-reporting-consulting">Accounting & Reporting Consulting</a></li>
              <li><a href="/esg-consulting">ESG Consulting</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3><a href="/news-and-views">News & Views</a></h3>
          </div>
          <div className="footer-section">
            <h3><a href="/join-us">Join Us</a></h3>
          </div>
          <div className="footer-section">
          <h3><a href="/contact-us">Contact Us</a></h3>
          </div>
      </div>
        <div className="last-section">
          <div className="social-media-links">
            <a href="#facebook"><FacebookIcon className="link-icon"/></a>
            <a href="#twitter"><TwitterIcon className="link-icon"/></a>
            <a href="#linkedin"><LinkedInIcon className="link-icon" /></a>
          </div>
    
          <p className="copyright">
            © {new Date().getFullYear()} Finactro. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  