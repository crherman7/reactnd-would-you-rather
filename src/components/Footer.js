import React from "react";
import "../styles/Footer.css";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="Footer__button" src={facebook} alt="Facebook" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="Footer__button" src={instagram} alt="Instagram" />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="Footer__button" src={twitter} alt="Twitter" />
      </a>
    </div>
  );
};

export default Footer;
