import React, { useState } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert("Thank you for your message! I'll get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="bg-white py-16 sm:py-18 md:py-20 mt-12 sm:mt-16 md:mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-14 md:mb-16 lg:mb-20 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-secondary-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {/* Contact details items */}
              <div className="flex items-start space-x-4">
                <div className="text-primary-600 mt-1">
                  <MdLocationOn className="text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-900">
                    Location
                  </h3>
                  <p className="text-sm sm:text-base text-secondary-600 mt-1">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Email contact item */}
              <div className="flex items-start space-x-4">
                <div className="text-primary-600 mt-1">
                  <MdEmail className="text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-900">
                    Email
                  </h3>
                  <a
                    href="mailto:hemantsingh1909@gmail.com"
                    className="text-sm sm:text-base text-primary-600 hover:text-primary-700 mt-1 inline-block"
                  >
                    hemantsingh1909@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone contact item */}
              <div className="flex items-start space-x-4">
                <div className="text-primary-600 mt-1">
                  <MdPhone className="text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-900">
                    Call
                  </h3>
                  <a
                    href="tel:+919175673432"
                    className="text-sm sm:text-base text-primary-600 hover:text-primary-700 mt-1 inline-block"
                  >
                    +91 9175673432
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4 sm:pt-6">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {/* Social icons */}
                  <a
                    href="https://github.com/hemants1703"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-600 hover:text-primary-600 transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-xl sm:text-2xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hemant-singh-0bb391221/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-600 hover:text-primary-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-xl sm:text-2xl" />
                  </a>
                  <a
                    href="https://twitter.com/hemantsingh1909"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-600 hover:text-primary-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-xl sm:text-2xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/hemantcreates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-600 hover:text-primary-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-xl sm:text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
              Send Message
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm sm:text-base font-medium text-gray-900 mb-1 sm:mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm sm:text-base font-medium text-gray-900 mb-1 sm:mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm sm:text-base font-medium text-gray-900 mb-1 sm:mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="example@domain.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm sm:text-base font-medium text-gray-900 mb-1 sm:mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base font-medium text-gray-900 mb-1 sm:mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-3 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md py-2 sm:py-3 text-sm sm:text-base transition duration-300 ease-in-out transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
