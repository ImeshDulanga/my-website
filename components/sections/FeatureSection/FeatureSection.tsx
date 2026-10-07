"use client";

import React, { useState, useEffect } from "react";
import styles from "./FeatureSection.module.css";

interface BusinessCard {
  id: number;
  tag: string;
  category: string;
  title: string;
  points: string[];
  actionText: string;
  headerColor: string;
}

// 6 Special Captions for your POS Business
const businessCards: BusinessCard[] = [
  {
    id: 0,
    tag: "FEATURE 01",
    category: "LIGHTNING FAST BILLING",
    title: "Process transactions in under 3 seconds",
    points: [
      "Barcode & QR Code Scanner support",
      "Offline Mode billing during internet drops",
      "Custom receipt design with company logo",
      "Multi-counter sync for fast checkout",
    ],
    actionText: "Explore Billing Features →",
    headerColor: "#0284c7",
  },
  {
    id: 1,
    tag: "FEATURE 02",
    category: "SMART INVENTORY CONTROL",
    title: "Never run out of fast-selling stock",
    points: [
      "Low-stock alert notifications",
      "Automated Purchase Order creation",
      "Expiry date & Batch tracking",
      "Multi-warehouse inventory management",
    ],
    actionText: "View Inventory Tools →",
    headerColor: "#0d9488",
  },
  {
    id: 2,
    tag: "FEATURE 03",
    category: "REAL-TIME ANALYTICS",
    title: "Track sales & profit from anywhere",
    points: [
      "Daily profit & loss reporting",
      "Top-selling product analytics",
      "Salesperson performance tracking",
      "Mobile App dashboard access",
    ],
    actionText: "Check Reports Dashboard →",
    headerColor: "#d97706",
  },
  {
    id: 3,
    tag: "FEATURE 04",
    category: "RESTAURANT & KOT MODE",
    title: "Streamline kitchen orders & tables",
    points: [
      "Kitchen Order Ticket (KOT) printing",
      "Table layout & Reservation tracking",
      "Recipe costing & ingredient usage",
      "Split bill & Discount management",
    ],
    actionText: "See Restaurant Features →",
    headerColor: "#7c3aed",
  },
  {
    id: 4,
    tag: "FEATURE 05",
    category: "CUSTOMER LOYALTY & SMS",
    title: "Grow repeat customers effortlessly",
    points: [
      "Points-based loyalty system",
      "SMS receipt & promotional messages",
      "Customer credit/khata ledger",
      "VIP discount tier management",
    ],
    actionText: "Learn Loyalty Program →",
    headerColor: "#2563eb",
  },
  {
    id: 5,
    tag: "FEATURE 06",
    category: "HARDWARE COMPATIBILITY",
    title: "Plug & Play with any POS Hardware",
    points: [
      "Thermal Receipt Printers (USB/LAN/BT)",
      "Cash Drawer & Pole Display support",
      "Android POS & Windows Compatibility",
      "1 Year Hardware Warranty included",
    ],
    actionText: "Check Compatible Hardware →",
    headerColor: "#059669",
  },
];

export default function FeatureSection(): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Loop through cards automatically every 3.5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % businessCards.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const getCardClass = (index: number) => {
    const offset = (index - currentIndex + businessCards.length) % businessCards.length;

    if (offset === 0) return styles.activeCenter;
    if (offset === 1) return styles.nextRight;
    if (offset === 2) return styles.farRight;
    if (offset === businessCards.length - 1) return styles.prevLeft;
    if (offset === businessCards.length - 2) return styles.farLeft;
    return styles.hiddenCard;
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <span className={styles.subTitle}>FEATURES</span>
        <h2 className={styles.mainTitle}>Everything your store needs to operate smoothly</h2>
      </div>

      <div className={styles.carouselWrapper}>
        {businessCards.map((card, index) => (
          <article
            key={card.id}
            className={`${styles.card} ${getCardClass(index)}`}
            style={{ borderTop: `4px solid ${card.headerColor}` }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.windowDots}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </div>
              <span className={styles.badgeTag} style={{ color: card.headerColor }}>{card.tag}</span>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.categoryTag}>{card.category}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>

              <div className={styles.featureList}>
                {card.points.map((point) => (
                  <div key={point} className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className={styles.cardFooter}>{card.actionText}</div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.dotsWrapper}>
        {businessCards.map((card, index) => (
          <span
            key={card.id}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
          />
        ))}
      </div>
    </section>
  );
}    