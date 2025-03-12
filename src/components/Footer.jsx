import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white py-12 dark:bg-secondary-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Let's Connect!</h2>
            <div className="space-y-3">
              <div className="flex items-center text-secondary-300 hover:text-white transition-colors duration-300">
                <HiMail className="h-5 w-5 mr-3" />
                <a
                  href="mailto:hemantsingh1909@gmail.com"
                  className="text-secondary-300 hover:text-white transition-colors duration-300"
                  aria-label="Email me"
                >
                  hemantsingh1909@gmail.com
                </a>
              </div>
              <div className="flex items-center text-secondary-300">
                <HiPhone className="h-5 w-5 mr-3" />
                <a
                  href="tel:+917355052652"
                  className="text-secondary-300 hover:text-white transition-colors duration-300"
                  aria-label="Call me"
                >
                  +91 7355052652
                </a>
              </div>
              <div className="flex items-start text-secondary-300">
                <HiLocationMarker className="h-5 w-5 mr-3 mt-1" />
                <address className="not-italic">
                  Indira Nagar, Sector-11, Lucknow, Uttar Pradesh, India
                </address>
              </div>
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div className="md:text-right">
            <h2 className="text-2xl font-semibold mb-4">Follow Me</h2>
            <div className="flex space-x-6 md:justify-end">
              <SocialIcon
                icon={FaLinkedin}
                href="https://www.linkedin.com/in/hemantsatwal/"
                label="LinkedIn Profile"
              />
              <SocialIcon
                icon={FaGithub}
                href="https://github.com/Hemantsingh1909"
                label="GitHub Profile"
              />
              <SocialIcon
                icon={FaInstagram}
                href="https://www.instagram.com/hemant_satwal/"
                label="Instagram Profile"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-400 text-sm">
          © {currentYear} Hemant Satwal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
