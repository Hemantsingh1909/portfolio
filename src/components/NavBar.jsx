import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "../styles/Navbar.module.css"; // Import CSS module
import DownloadCV from "./DownloadCV";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Logo on the Left */}
        <Link to="/" className={styles.navbarLogo}>
          <img src={logo} alt="Company Logo" />
        </Link>

        {/* Navigation Links in the Middle */}
        <ul className={styles.navLinks}>
          {["Home", "About", "Services", "Pricing", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // "Home" redirects to "/"
                className={({ isActive }) =>
                  `${styles.navItem} ${
                    item === "Home" ? "" : isActive ? styles.active : "" // Prevent Home from being highlighted
                  }`
                }
                onClick={() => setDropdownOpen(false)} // Ensure dropdown does not open on click
              >
                {item}
              </NavLink>
            </li>
          ))}

          {/* Dropdown */}
          <li
            className={styles.dropdown}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={styles.navItem}
              type="button"
              aria-expanded={dropdownOpen}
            >
              Pages
              {dropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            <ul
              className={`${styles.dropdownMenu} ${
                dropdownOpen ? styles.show : ""
              }`}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {["Portfolio Details", "Blog Grid", "Blog Details"].map(
                (item) => (
                  <li key={item}>
                    <NavLink
                      to={`/${item.replace(/\s+/g, "-").toLowerCase()}`}
                      className={({ isActive }) =>
                        `${styles.dropdownItem} ${
                          isActive ? styles.active : ""
                        }`
                      }
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </li>
        </ul>

        {/* Download CV Button on the Right */}

          <DownloadCV/>

      </div>
    </nav>
  );
};

export default NavBar;
