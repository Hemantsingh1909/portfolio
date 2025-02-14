import styles from "../styles/Navbar.module.css"; // Update with your styles file

const DownloadCV = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/HEMANT_SINGH_SATWAL_RESUME.pdf"; // Path to the PDF file in the public folder
    link.download = "Resumé.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className={styles.downloadBtn} onClick={handleDownload} aria-label="Download CV">
      Download CV
    </button>
  );
};

export default DownloadCV;
