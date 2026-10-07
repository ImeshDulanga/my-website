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
        <a href="#features">FEATURES</a>
        <a href="#hardware">HARDWARE</a>
        <a href="#pricing">PRICING</a>
        <a href="#contact">CONTACT</a>
      </nav>

      {/* Call-to-action button */}
      <a href="#contact" className={styles.callBtn}>
        GET DEMO NOW
      </a>
    </header>
  );
}