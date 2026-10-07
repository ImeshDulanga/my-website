import React from "react";
import styles from "./Pricing.module.css";

const posPackages = [
  { name: "Retail Starter", price: "$299", desc: "Includes POS Terminal Software + Receipt Printer setup." },
  { name: "Supermarket Pro", price: "$499", desc: "Full Hardware Bundle + Barcode Scanner + Dual Screen." },
  { name: "Restaurant Edition", price: "$399", desc: "Kitchen Display System + Table Management + Software." },
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricingSection}>
      <span className={styles.subTitle}>PACKAGES & PRICING</span>
      <h2 className={styles.heading}>Choose Your POS Setup</h2>

      <div className={styles.grid}>
        {posPackages.map((pkg, i) => (
          <div key={i} className={styles.card}>
            <h3>{pkg.name}</h3>
            <div className={styles.price}>{pkg.price}</div>
            <p style={{ fontSize: "0.9rem", color: "#64748b" }}>{pkg.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}