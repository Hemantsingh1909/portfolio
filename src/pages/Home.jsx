import React from "react";
import logo from "../assets/profile.png";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-blue-600 text-lg font-semibold">
            Hey There 👋 I am
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hemant Satwal
          </h1>
          <h3 className="text-xl md:text-2xl text-gray-600">
            <span className="opacity-70">Professional</span> Software Developer
          </h3>
          <p className="text-gray-600 opacity-70 max-w-md mx-auto lg:mx-0">
            Transforming ideas into digital reality through clean and efficient
            code.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              type="button"
              onClick={() => navigate("/contact")} // Navigate to contact page
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Me
            </button>
            <button
              type="button"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="relative max-w-xl w-full">
            {/* Blue Background Shape */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-3/4 h-3/4 bg-blue-600 rounded-full opacity-20 blur-3xl" />
            </div>

            {/* Profile Image */}
            <div className="relative z-10">
              <img
                src={logo}
                alt="Hemant Satwal"
                className="w-full h-auto max-w-2xl object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
