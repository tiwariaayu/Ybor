"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import styles from "./Hero.module.css";

// Floating animation variants
const floatVariant = (delay: number): Variants => ({
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  },
});

const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Floating Animated Icons */}
      <motion.div
        className={styles.floatIcon}
        style={{ top: "15%", left: "10%" }}
        variants={floatVariant(0)}
        animate="animate"
        aria-hidden="true"
      >
        <div className={`${styles.iconCircle} glass`}>🎨</div>
      </motion.div>
      <motion.div
        className={styles.floatIcon}
        style={{ top: "25%", right: "15%" }}
        variants={floatVariant(1)}
        animate="animate"
        aria-hidden="true"
      >
        <div className={`${styles.iconCircle} glass`}>📈</div>
      </motion.div>
      <motion.div
        className={styles.floatIcon}
        style={{ bottom: "20%", left: "15%" }}
        variants={floatVariant(2)}
        animate="animate"
        aria-hidden="true"
      >
        <div className={`${styles.iconCircle} glass`}>💡</div>
      </motion.div>

      <motion.div
        className={`container ${styles.content}`}
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.p variants={fadeInUp} className={styles.eyebrow}>
          Redefining Digital Excellence
        </motion.p>
        <motion.h1 variants={fadeInUp} className={styles.title}>
          Elevate Your <span className="text-gradient-primary">Brand</span> <br />
          Experience
        </motion.h1>
        <motion.p variants={fadeInUp} className={styles.subtitle}>
          We craft digital content strategies that connect businesses with
          customers, driving growth and engagement through data-driven
          creativity and premium design.
        </motion.p>
        <motion.div variants={fadeInUp} className={styles.actions}>
          <Link href="#contact" className="btn btn-primary">
            Start Your Journey
          </Link>
          <Link href="#services" className="btn btn-secondary">
            Explore Services
          </Link>
        </motion.div>

        {/* Decorative Grid */}
        <motion.div variants={fadeInUp} className={styles.imageGrid}>
          <div className={styles.gridItem}>
            <Image
              src="/images/hero_portrait_woman_1765964013088.png"
              alt="Brand growth"
              fill
              className={styles.gridImage}
            />
          </div>
          <div className={`${styles.gridItem} ${styles.gridCenter}`}>
            <div className={styles.centerImageWrapper}>
              <Image
                src="/images/hero_team_working_1765964329903.png"
                alt="Strategy session"
                fill
                className={styles.gridImage}
              />
            </div>
            <div className={styles.centerBadge}>
              EST. <br />
              2024
            </div>
          </div>
          <div className={styles.gridItem}>
            <Image
              src="/images/hero_portrait_man_1765964153979.png"
              alt="Digital impact"
              fill
              className={styles.gridImage}
            />
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeInUp} className={styles.stats}>
          <div className={styles.statItem}>
            <strong>4.8K</strong>
            <span>Active Users</span>
          </div>
          <div className={styles.statItem}>
            <strong>15+</strong>
            <span>Core Services</span>
          </div>
          <div className={styles.statItem}>
            <strong>3.6K+</strong>
            <span>Partnerships</span>
          </div>
          <div className={styles.statItem}>
            <strong>130+</strong>
            <span>Design Awards</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

