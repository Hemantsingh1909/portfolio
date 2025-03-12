import React from "react";
import { HiDownload } from "react-icons/hi";
import styles from "../styles/Navbar.module.css"; // Import CSS module

const DownloadCV = () => {
  const handleDownload = () => {
    // Open the generated PDF in a new tab for the user to download
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <button
      className={`${styles.downloadBtn} text-xs sm:text-sm md:text-base`}
      onClick={handleDownload}
      aria-label="Download CV as PDF"
    >
      <HiDownload className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
      <span>Resume</span>
    </button>
  );
};

export default DownloadCV;
