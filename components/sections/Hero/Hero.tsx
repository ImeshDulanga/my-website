import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles.heroContainer}>
        <div className={styles.contentWrapper}>
          {/* Status Badge */}
          <div className={styles.badge}>● POWERFUL PERFORMANCE • 3+ YEARS EXCELLENCE</div>

          {/* Headline for POS System */}
          <h1 className={styles.title}>
            Empower Your Store With <br />
            <span className={styles.highlight}>Powerful POS Systems.</span>
          </h1>

          <p className={styles.description}>
            High performance POS and custom desktop solutions engineered to keep your billing counter moving fast even when internet connection drops.
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
              <div className={styles.metricValue}>3+</div>
              <div className={styles.metricLabel}>YEARS OF DEDICATED EXPERIENCE</div>
            </div>
            <div>
              <div className={styles.metricValue}>100%</div>
              <div className={styles.metricLabel}>DATA PRIVACY & LOCAL BACKUPS</div>
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
          <span className={styles.tickerItem}>★ THERMAL PRINTER SUPPORT</span>
          <span className={styles.tickerItem}>★ CLOUD BACKUP</span>
        </div>
      </div>
    </>
  );
}