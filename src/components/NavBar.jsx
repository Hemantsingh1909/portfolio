import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "../styles/Navbar.module.css"; // Import CSS module
import DownloadCV from "./DownloadCV";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        
        {/* Logo on the Left */}
        <Link to="/" className={styles.navbarLogo}>
          <img src={logo} alt="Company Logo" />
        </Link>

        {/* Navigation Links in the Middle */}
        <ul className={styles.navLinks}>
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // "Home" redirects to "/"
                className={({ isActive }) =>
                  `${styles.navItem} ${item === "Home" ? "" : isActive ? styles.active : ""}`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Download CV Button */}
        <DownloadCV />
      </div>
    </nav>
  );
};

export default NavBar;
