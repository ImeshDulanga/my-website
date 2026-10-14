"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import heroImage from "../../../asset/hero.jpg";
import styles from "./Hero.module.css";

const slides = [
  {
    image: heroImage,
    alt: "Point-of-sale system in a retail setting",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

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
        <div
          className={styles.slideshow}
          role="region"
          aria-roledescription="carousel"
          aria-label="POS system images"
        >
          {slides.map((slide, index) => (
            <Image
              key={slide.image.src}
              className={`${styles.slideImage} ${index === activeSlide ? styles.activeSlide : ""}`}
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          ))}
          {slides.length > 1 && (
            <div className={styles.slideControls} aria-label="Choose hero image">
              {slides.map((slide, index) => (
                <button
                  key={slide.image.src}
                  type="button"
                  className={`${styles.slideDot} ${index === activeSlide ? styles.activeDot : ""}`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-current={index === activeSlide}
                />
              ))}
            </div>
          )}
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