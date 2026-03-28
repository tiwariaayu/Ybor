import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Solutions.module.css";

export default function Solutions() {
  return (
    <section id="solutions" className={`section-padding ${styles.solutions}`}>
      <div className="container">
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <div className={styles.accentLine}></div>
            <h2 className={styles.title}>
              Engineering <span className="text-gradient-primary">Solutions</span> <br />
              for the Digital Era
            </h2>
          </div>
          <p className={styles.description}>
            We solve complex business challenges with innovative digital
            strategies. From performance marketing to technical SEO, we build
            the foundation for your sustainable growth.
          </p>
        </div>

        {/* Content Layout */}
        <div className={styles.content}>
          {/* Left Column (Large Image) */}
          <motion.div
            className={styles.leftCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.largeImagePlaceholder}>
              <Image
                src="/images/solutions_team_meeting_1765963663297.png"
                alt="Strategy session"
                fill
                className={styles.imageConfig}
              />
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.subContent}>
              <div className={styles.badge}>
                <div className={styles.badgeText}>
                  2024 • PREMIUM DIGITAL SOLUTIONS •
                </div>
                <div className={styles.badgeArrow}>↗</div>
              </div>

              <div className={styles.smallImagePlaceholder}>
                <Image
                  src="/images/solutions_analytics_dashboard_1765963792409.png"
                  alt="Analytics Dashboard"
                  fill
                  className={styles.imageConfig}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
