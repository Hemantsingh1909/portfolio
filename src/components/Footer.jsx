import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import SocialIcon from "./SocialIcon";
const Footer = () => {
  return (
    <>
      <footer className="relative pb-28 pt-28 bg-[#090F34] z-10">
        <div className="max-w-full mx-auto mr-36 ml-20">
          <div className="flex flex-wrap justify-between text-white pb-16">
            <div className="w-2/6 pl-9">
              <h2 className="font-bold text-[44px] mb-2">Lets Talk!</h2>
              <h2 className="font-bold mb-3 text-2xl">Contact Info</h2>
              <p className="font-medium text-base mb-1 opacity-90">
                hemantsingh1909@gmail.com
              </p>
              <p className="font-medium text-base mb-1 opacity-90">
                Indira Nagar, Sector-11, Lucknow, Uttar Pradesh, India.{" "}
              </p>
              <p className="font-medium text-base mb-1 opacity-90">
                +91-7355052652
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-9">What I Do?</h2>
              <ul>
                <li>
                  <a className="inline-block text-base mb-3" href="">
                    The Studio
                  </a>
                </li>
                <li>
                  <a className="inline-block text-base mb-3" href="">
                    Sponsoring
                  </a>
                </li>
                <li>
                  <a className="inline-block text-base mb-3" href="">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a className="inline-block text-base mb-3" href="">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-9">News</h2>
              <ul>
                <li>
                  <a className="inline-block text-base mb-3" href="">
                    Hot Stuff
                  </a>
                </li>
                <li>
                  <a className="inline-block text-base mb-3" href="">
                    Perfect Place
                  </a>
                </li>
                <li>
                  <a className="inline-block text-base mb-3" href="">
                    Vintage
                  </a>
                </li>
                <li>
                  <a className="inline-block text-base mb-3" href="">
                    Products
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-9">Quick Links</h2>
              <ul>
                <li>
                  <a className="inline-block text-base mb-3" href="">
                    Style
                  </a>
                </li>
                <li>
                  <a className="inline-block text-base mb-3" href="">
                    Health
                  </a>
                </li>
                <li>
                  <a className="inline-block text-base mb-3" href="">
                    Relationship
                  </a>
                </li>
                <li>
                  <a className="inline-block text-base mb-3" href="">
                    Legal & Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="opacity-20" />
          <div className="flex flex-col items-center p-8 gap-5">
            <div className="social-icons flex gap-4 pt-5">
              <SocialIcon
                icon={FaLinkedin}
                href="https://www.linkedin.com/in/hemantsatwal/"
              />
              <SocialIcon
                icon={FaInstagram}
                href="https://www.instagram.com/hemant_satwal/"
              />
              <SocialIcon
                icon={FaTwitter}
                href="https://twitter.com/username"
              />
              <SocialIcon
                icon={FaGithub}
                href="https://github.com/Hemantsingh1909"
              />
            </div>
            <h1 className="text-[#949CB1] text-lg font-normal">
              All rights reserved by © Hemant Satwal 2024
            </h1>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
