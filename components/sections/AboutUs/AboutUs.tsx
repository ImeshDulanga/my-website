import React from "react";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section className={styles.aboutContainer} id="about">
      {/* Left Content Side */}
      <div>
        <span className={styles.subTitle}>PREGUNTAS FRECUENTES • 02</span>

        <h2 className={styles.title}>
          <span className={styles.titleItalic}>¿Pueden abrir sin</span> <br />
          dañar la chapa?
        </h2>

        <p className={styles.description}>
          Sí. Usamos pick guns de precisión y ganzúas de tensión calibradas para el cilindro específico de tu cerradura — no palancas ni destornilladores. El 94% de nuestras aperturas no dejan marca visible.
        </p>

        <p className={styles.description}>
          En los casos donde la cerradura está dañada de origen o es de alta seguridad, te avisamos antes de proceder. Si hay que taladrar, usamos brocas de extracción que preservan la caja de la puerta.
        </p>

        {/* Feature Badges Grid */}
        <div className={styles.badgeContainer}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}>•</span> Pick gun eléctrica
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeDot}>•</span> Ganzúas de tensión
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeDot}>•</span> Decodificación por tacto
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeDot}>•</span> Extracción sin daño
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeDot}>•</span> Herramientas certificadas
          </div>
        </div>

        {/* Highlighted Stat Box */}
        <div className={styles.statBox}>
          <div className={styles.statNumber}>94%</div>
          <div className={styles.statLabel}>
            APERTURAS SIN DAÑO VISIBLE A LA CHAPA
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