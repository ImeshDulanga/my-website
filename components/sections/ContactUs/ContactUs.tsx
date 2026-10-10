"use client";

import React, { useState } from "react";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "Retail Store",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Success! Emails sent successfully.");
        setFormData({ name: "", email: "", phone: "", businessType: "Retail Store", message: "" });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (err) {
      setStatus("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.topLine}>
        <span className={styles.tagLabel}>GET STARTED NOW</span>
        <div className={styles.divider} />
      </div>

      <div className={styles.gridContainer}>
        {/* Left Side Content matching screenshot design */}
        <div>
          <h2 className={styles.heading}>
            <span>Get your POS System</span> <br />
            installed today.
          </h2>

          <p className={styles.description}>
            Fill out the form below and our software specialist will reach out shortly to discuss your specific business workflow, setup details, and hardware configuration.
          </p>

          <p className={styles.description}>
            Need quick answers? Message us on WhatsApp for immediate guidance and product details.
          </p>

          <div className={styles.whatsappContainer}>
            <a href="https://wa.me/" className={styles.whatsappBtn}>
              Contact via WhatsApp now
            </a>
          </div>
        </div>

        {/* Right Side Form matching screenshot design */}
        <div id="quote-form" className={styles.formCard}>
          <form onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>FULL NAME</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className={styles.inputField}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>EMAIL ADDRESS</label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                className={styles.inputField}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>BUSINESS TYPE</label>
              <select
                className={styles.selectField}
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              >
                <option value="Retail Store">Retail Store</option>
                <option value="Supermarket">Supermarket</option>
                <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Choose Your POS Plan</label>
              <select
                className={styles.selectField}
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              >
                <option value="Retail Store">Plan A</option>
                <option value="Supermarket">Plan B</option>
                <option value="Restaurant / Cafe">Plan C</option>
                <option value="Pharmacy">Plan D</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>PHONE NUMBER</label>
              <input
                type="tel"
                required
                placeholder="+94 77 123 4567"
                className={styles.inputField}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>


            <button type="submit" disabled={loading} className={styles.submitBtn}>
              {loading ? "SENDING..." : "GET FREE QUOTE"}
            </button>

            {status && (
              <p style={{ marginTop: "15px", textAlign: "center", fontSize: "0.85rem", color: status.includes("Success") ? "#16a34a" : "#dc2626" }}>
                {status}
              </p>
            )}

            <p className={styles.footerNote}>
              We call back within 1 day • No charges until installation
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}