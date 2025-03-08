import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="bg-[#0B0F1E] text-white py-12">
      <div className="max-w-5xl mx-auto text-center px-6">
        
        {/* Contact Info */}
        <h2 className="text-3xl font-semibold mb-4">Let’s Connect!</h2>
        <p className="text-gray-400 text-lg mb-2">
        <a
            href="mailto:hemantsingh1909@gmail.com"
            className="text-gray-400 hover:text-white transition duration-300"
          >
          hemantsingh1909@gmail.com
          </a>
        </p>
        <p className="text-gray-400 text-lg mb-2">
          +91 7355052652
        </p>
        <p className="text-gray-400 text-lg">
          Indira Nagar, Sector-11, Lucknow, Uttar Pradesh, India
        </p>
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          <SocialIcon
            icon={FaLinkedin}
            href="https://www.linkedin.com/in/hemantsatwal/"
          />
          <SocialIcon
            icon={FaInstagram}
            href="https://www.instagram.com/hemant_satwal/"
          />
          <SocialIcon
            icon={FaGithub}
            href="https://github.com/Hemantsingh1909"
          />
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Hemant Satwal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
