import styles from "../styles/Navbar.module.css";

const DownloadCV = () => {
  const handleDownload = () => {
    // Open the generated PDF in a new tab for the user to download
    window.open("/resume.pdf", "_blank");
  };

  return (
    <button
      className={styles.downloadBtn}
      onClick={handleDownload}
      aria-label="Download CV as PDF"
    >
      Download CV
    </button>
  );
};

export default DownloadCV;
