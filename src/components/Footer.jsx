import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white py-8 sm:py-10 md:py-12 dark:bg-secondary-950 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              Let's Connect!
            </h2>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center text-secondary-300 hover:text-white transition-colors duration-300">
                <HiMail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 flex-shrink-0" />
                <a
                  href="mailto:hemantsingh1909@gmail.com"
                  className="text-secondary-300 hover:text-white transition-colors duration-300 text-sm sm:text-base break-all"
                  aria-label="Email me"
                >
                  hemantsingh1909@gmail.com
                </a>
              </div>
              <div className="flex items-center text-secondary-300">
                <HiPhone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 flex-shrink-0" />
                <a
                  href="tel:+917355052652"
                  className="text-secondary-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  aria-label="Call me"
                >
                  +91 7355052652
                </a>
              </div>
              <div className="flex items-start text-secondary-300">
                <HiLocationMarker className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                <address className="not-italic text-sm sm:text-base">
                  Bangalore, India
                </address>
              </div>
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div className="mt-6 md:mt-0 md:text-right">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              Follow Me
            </h2>
            <div className="flex space-x-4 sm:space-x-6 md:justify-end">
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
        <div className="border-t border-secondary-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-secondary-400 text-xs sm:text-sm">
          © {currentYear} Hemant Satwal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
