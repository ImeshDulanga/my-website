import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles.heroContainer}>
        <div className={styles.contentWrapper}>
          {/* Status Badge */}
          <div className={styles.badge}>● NEXT GEN POS SYSTEM • READY</div>

          {/* Headline for POS System */}
          <h1 className={styles.title}>
            Smart POS System <br />
            <span className={styles.highlight}>Built for Modern Retail.</span>
          </h1>

          <p className={styles.description}>
            All-in-one POS software and hardware solution to manage inventory, sales, and payments effortlessly.
          </p>

          {/* Action Buttons */}
          <div className={styles.buttonGroup}>
            <a href="#contact" className={styles.primaryBtn}>GET POS SYSTEM NOW</a>
            <a href="#demo" className={styles.secondaryBtn}>WhatsApp Inquiry</a>
          </div>

          {/* Stats Bar */}
          <div className={styles.metricsGrid}>
            <div>
              <div className={styles.metricValue}>99.9%</div>
              <div className={styles.metricLabel}>SYSTEM UPTIME</div>
            </div>
            <div>
              <div className={styles.metricValue}>24/7</div>
              <div className={styles.metricLabel}>TECHNICAL SUPPORT</div>
            </div>
            <div>
              <div className={styles.metricValue}>500+</div>
              <div className={styles.metricLabel}>ACTIVE STORES</div>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Ticker Animation Bar */}
      <div className={styles.tickerContainer}>
        <div className={styles.tickerTrack}>
          <span className={styles.tickerItem}>★ INVENTORY MANAGEMENT</span>
          <span className={styles.tickerItem}>★ BARCODE SCANNING</span>
          <span className={styles.tickerItem}>★ REAL-TIME ANALYTICS</span>
          <span className={styles.tickerItem}>★ THERMAL PRINTER SUPPORT</span>
          <span className={styles.tickerItem}>★ CLOUD BACKUP</span>
          {/* Repeated for continuous infinite loop */}
          <span className={styles.tickerItem}>★ INVENTORY MANAGEMENT</span>
          <span className={styles.tickerItem}>★ BARCODE SCANNING</span>
          <span className={styles.tickerItem}>★ REAL-TIME ANALYTICS</span>
        </div>
      </div>
    </>
  );
}