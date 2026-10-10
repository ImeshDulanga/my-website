import React from "react";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section className={styles.aboutContainer} id="about">
      {/* Left Content Side */}
      <div>
        <span className={styles.subTitle}>PREGUNTAS FRECUENTES • 02</span>

        <h2 className={styles.title}>
          <span className={styles.titleItalic}>ABOUT US</span> <br />
          Who WE Are?
        </h2>

        <p className={styles.description}>
          With over 3 years of hands on experience in the software industry, we specialize in delivering high-performance, custom software solutions designed to drive operational efficiency and business growth. From full scale software development to our flagship Point of Sale (POS) Systems, we empower retail stores, supermarkets, and restaurants across Sri Lanka with cutting edge, reliable, and user friendly technology.
        </p>

        <p className={styles.description}>
          Our journey is built on trust, continuous innovation, and an unwavering commitment to quality. Whether you need a lightning-fast billing engine, real time inventory management, or tailored software designed for your unique business workflow, we provide end to end digital transformation with dedicated technical support to ensure your business operates without interruption.
        </p>

        {/* Feature Badges Grid */}
        <div className={styles.badgeContainer}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}>•</span> 3+ Years of Excellence
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeDot}>•</span> Custom Software Development
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeDot}>•</span> Dedicated Support
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeDot}>•</span> Flagship POS Solutions
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeDot}>•</span> Scalable & Future Ready Architecture
          </div>
        </div>

        {/* Highlighted Stat Box */}
        <div className={styles.statBox}>
          <div className={styles.statNumber}>10+</div>
          <div className={styles.statLabel}>
            POS & BUSINESS MODULES
          </div>
        </div>
      </div>

      {/* Right Image Side with B&W to Color Hover Effect */}
      <div className={styles.imageWrapper}>
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop" 
          alt="POS Hardware and Services"
          className={styles.image}
        />
      </div>
    </section>
  );
}