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
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Gradients */}
      <div className={styles.bgGradient1}></div>
      <div className={styles.bgGradient2}></div>

      {/* Floating Animated Icons with Glassmorphism */}
      <motion.div
        className={styles.floatIcon}
        style={{ top: "15%", left: "10%" }}
        variants={floatVariant(0)}
        animate="animate"
      >
        <div className={`${styles.iconCircle} ${styles.glass}`}>🎨</div>
      </motion.div>
      <motion.div
        className={styles.floatIcon}
        style={{ top: "25%", right: "15%" }}
        variants={floatVariant(1)}
        animate="animate"
      >
        <div className={`${styles.iconCircle} ${styles.glass}`}>📈</div>
      </motion.div>
      <motion.div
        className={styles.floatIcon}
        style={{ bottom: "20%", left: "15%" }}
        variants={floatVariant(2)}
        animate="animate"
      >
        <div className={`${styles.iconCircle} ${styles.glass}`}>💡</div>
      </motion.div>

      <motion.div
        className={`container ${styles.content}`}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.p variants={fadeInUp} className={styles.eyebrow}>
          Powering your business with Ybor.
        </motion.p>
        <motion.h1 variants={fadeInUp} className={styles.title}>
          <span className="text-highlight">Ybor Digital Marketing</span> <br />
          Agency
        </motion.h1>
        <motion.p variants={fadeInUp} className={styles.subtitle}>
          We craft digital content strategies that connect businesses with
          customers, driving growth and engagement through data-driven
          creativity.
        </motion.p>
        <motion.div variants={fadeInUp} className={styles.actions}>
          <Link href="#contact" className="btn btn-primary">
            Get Started
          </Link>
          <Link
            href="#services"
            className="btn btn-secondary"
            style={{
              marginLeft: "1rem",
              background: "white",
              color: "var(--primary)",
            }}
          >
            Our Services
          </Link>
        </motion.div>

        {/* Decorative Grid with Real Images */}
        <motion.div variants={fadeInUp} className={styles.imageGrid}>
          <div className={styles.gridItem}>
            <Image
              src="/images/hero_portrait_woman_1765964013088.png"
              alt="Happy client"
              fill
              className={styles.gridImage}
            />
          </div>
          <div className={`${styles.gridItem} ${styles.gridCenter}`}>
            <div className={styles.centerImageWrapper}>
              <Image
                src="/images/hero_team_working_1765964329903.png"
                alt="Team working"
                fill
                className={styles.gridImage}
              />
            </div>
            <div className={`${styles.centerBadge} ${styles.glass}`}>
              Ybor
              <br />
              Agency
            </div>
          </div>
          <div className={styles.gridItem}>
            <Image
              src="/images/hero_portrait_man_1765964153979.png"
              alt="Happy client"
              fill
              className={styles.gridImage}
            />
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeInUp} className={styles.stats}>
          <div className={styles.statItem}>
            <strong>4.8K</strong>
            <span>Jobs Completed</span>
          </div>
          <div className={styles.statItem}>
            <strong>15+</strong>
            <span>Industry Experience</span>
          </div>
          <div className={styles.statItem}>
            <strong>3.6K+</strong>
            <span>Global Clients</span>
          </div>
          <div className={styles.statItem}>
            <strong>130+</strong>
            <span>Awards Won</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
