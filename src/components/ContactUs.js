import React, { useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CoverIntro from "./CoverIntro";
import "../styles/ContactUs.css";
import cover from "../constants/contactus-cover.jpg";
import emailjs from "@emailjs/browser";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const intro = {
  image: cover,
  title: "CONTACT US",
};

const ContactUs = () => {
  const form = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLTAE_ID,form.current,process.env.REACT_APP_PUBLIC_KEY)
      .then(() => {
        alert("Email sent successfully!");
      }, () => {
        alert("An error occurred while sending the email.");
      })
  };

  return (
    <div>
      <Navbar />
      <CoverIntro props={intro} />
      <div className="contact-container">
        <div className="enquiry">
            <MailOutlineIcon className="mail-icon"/>
            <p className="email">Write to us at <a href="mailto:accounting@finactro.com">accounting@finactro.com</a></p>
        </div>
        <h1>How can we help?</h1>
        <p>All fields are required*</p>
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name*"
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
            required
          />

          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Mobile Number*"
            required
          />

          <input
            type="text"
            id="city"
            name="city"
            placeholder="City*"
            required
          />

          <select id="requestType" name="requestType" required defaultValue={"DEFAULT"}>
            <option disabled value="DEFAULT">
              Type of Request
            </option>
            <option value="scheduleMeeting">Schedule a Meeting</option>
            <option value="businessEnquiries">Business Enquiries</option>
          </select>

          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Message"
          ></textarea>
          <button className="form-submit" type="submit">
            Send
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
