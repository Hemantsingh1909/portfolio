import React from "react";

const SocialIcon = ({ icon: Icon, href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-secondary-400 hover:text-primary-500 transition-colors duration-300"
      aria-label={label || "Social media link"}
    >
      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
  );
};

export default SocialIcon;
