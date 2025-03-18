import React from "react";
import { useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 mt-12 sm:mt-14 md:mt-16 lg:mt-20">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-9xl font-bold text-primary-600">404</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
          Page Not Found
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center justify-center px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md text-base shadow-sm transition-all duration-300 ease-in-out"
        >
          <HiHome className="mr-2 text-lg" />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
