"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger navbar color switch on scroll
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      {/* Brand Logo */}
      <div className={styles.logo}>POS Master.</div>

      {/* Navigation Links */}
      <nav className={styles.navLinks}>
        <a href="#about">ABOUT US</a>
        <a href="#feature">FEATURES</a>
        <a href="#pricing">OUR PACKAGES</a>
        <a href="#contact">CONTACT US</a>
      </nav>

      {/* Call-to-action button */}
      <a href="#contact" className={styles.callBtn}>
        GET QUOTE NOW
      </a>
    </header>
  );
}