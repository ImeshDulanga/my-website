"use client";

import React from "react";
import styles from "./Footer.module.css";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer(): React.ReactElement {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <div className={styles.brandLogo}>
            Smart<span className={styles.logoAccent}>HQ</span>
          </div>
          <p className={styles.brandText}>
            Smart software and reliable POS technology engineered for modern Sri Lankan enterprises. Fast billing, secure local database management, and tailored digital innovation.
          </p>
        </div>

        {/* Links Column 1 */}
        <div>
          <h3 className={styles.colHeading}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <a href="#about">About Us</a>
            </li>
            <li className={styles.linkItem}>
              <a href="#feature">Features</a>
            </li>
            <li className={styles.linkItem}>
              <a href="#pricing">Our Packages</a>
            </li>
            <li className={styles.linkItem}>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        
        {/* Contact Column */}
        <div className={styles.contactCol}>
          <h3 className={styles.colHeading}>Contact Us</h3>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <Phone className={styles.icon} />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className={styles.contactItem}>
              <Mail className={styles.icon} />
              <span>info@company.com</span>
            </li>
            <li className={styles.contactItem}>
              <Clock className={styles.icon} />
              <span>Mon-Sunday: 24 Hours</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} SmartHQ. All rights reserved.</p>
        <div className={styles.legalLinks}>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}