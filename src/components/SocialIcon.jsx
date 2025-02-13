import React, { useState } from 'react';

const SocialIcon = ({ icon, size = 30, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  const iconStyles = {
    fontSize: `${size}px`,
    color: isHovered ? '#496CF6' : '#949CB1',
    transition: 'color 0.1s ease',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={iconStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon()}
    </a>
  );
};

export default SocialIcon;
