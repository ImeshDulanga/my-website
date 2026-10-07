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
            Brand<span className={styles.logoAccent}>Name</span>
          </div>
          <p className={styles.brandText}>
            Your company description goes here. Briefly explain what you do and how you can help your customers.
          </p>
        </div>

        {/* Links Column 1 */}
        <div>
          <h3 className={styles.colHeading}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <a href="/about">About Us</a>
            </li>
            <li className={styles.linkItem}>
              <a href="/services">Services</a>
            </li>
            <li className={styles.linkItem}>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li className={styles.linkItem}>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h3 className={styles.colHeading}>Resources</h3>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <a href="/help-center">Help Center</a>
            </li>
            <li className={styles.linkItem}>
              <a href="/documentation">Documentation</a>
            </li>
            <li className={styles.linkItem}>
              <a href="/support">Support</a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
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
              <MapPin className={styles.icon} />
              <span>123 Main Street, City, State 12345</span>
            </li>
            <li className={styles.contactItem}>
              <Clock className={styles.icon} />
              <span>Mon-Fri: 9AM - 5PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} BrandName. All rights reserved.</p>
        <div className={styles.legalLinks}>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}