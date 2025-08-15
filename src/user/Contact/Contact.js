import React from 'react';
import './Contact.css'; 
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-text">
          I’d love to connect! Whether it’s about collaboration, questions, or just a friendly chat,  
          feel free to reach out through any of my social platforms below.
        </p>

        <div className="social-icons">
         
          <a href="#" target="_blank" rel="noopener noreferrer" className="icon-placeholder"><FaInstagram/>Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="icon-placeholder"><FaLinkedin/>LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="icon-placeholder"><FaGithub/>GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="icon-placeholder"><FaTwitter/>Twitter</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="icon-placeholder"><FaFacebook/>Facebook</a>
        </div>

        <p className="email-text">
          Or drop me an email at <a href="mailto:aditinaik811@gmail.com">aditi811@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
