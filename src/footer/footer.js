import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // Pastikan Anda memiliki file CSS untuk styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icon-container">
        <FaFacebook className="icon" />
        <FaTwitter className="icon" />
        <FaInstagram className="icon" />
        <FaLinkedin className="icon" />
      </div>
      <p className="footer-text">SMK TI BAZMA</p>
    </footer>
  );
};

export default Footer;
