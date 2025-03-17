import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import styles from "../styles/Navbar.module.css"; // Import CSS module
import DownloadCV from "./DownloadCV";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect to add scrolled style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when Escape key is pressed
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        {/* Logo on the Left */}
        <Link to="/" className={styles.navbarLogo} aria-label="Home">
          <img src={logo} alt="Hemant Satwal Logo" />
        </Link>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks} role="navigation">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.active : ""}`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="https://medium.com/@hemantsingh1909"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navItem}
            >
              Blog
            </a>
          </li>
        </ul>

        {/* Right side actions */}
        <div className={styles.navActions}>
          <DownloadCV />
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenuAlt3 className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${
          mobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className={styles.mobileNavLinks}>
          <h2 id="mobile-menu-title" className="sr-only">
            Mobile Navigation Menu
          </h2>
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `${styles.mobileNavItem} ${isActive ? styles.active : ""}`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </NavLink>
          ))}
          <a
            href="https://medium.com/@hemantsingh1909"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileNavItem}
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </a>
          <div className={styles.mobileNavItem}>
            <DownloadCV />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
