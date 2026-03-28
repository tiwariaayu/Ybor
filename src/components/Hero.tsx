"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import styles from "./Hero.module.css";

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
      <div className={styles.bgGlow}></div>
      
      <motion.div
        className={`container ${styles.content}`}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeInUp} className={styles.badge}>
          ✨ The Future of Digital Marketing
        </motion.div>
        
        <motion.h1 variants={fadeInUp} className={styles.title}>
          Elevate Your Brand <br /> 
          <span className="text-gradient">With Ybor.</span>
        </motion.h1>
        
        <motion.p variants={fadeInUp} className={styles.subtitle}>
          Pinterest-inspired creativity meets data-driven strategy. <br />
          We build digital experiences that stick.
        </motion.p>
        
        <motion.div variants={fadeInUp} className={styles.actions}>
          <Link href="#contact" className="btn btn-primary">
            Start Your Journey
          </Link>
          <Link href="#services" className="btn btn-outline" style={{ marginLeft: '1rem' }}>
            Exploer Services
          </Link>
        </motion.div>

        {/* Masonry-inspired Preview */}
        <motion.div variants={fadeInUp} className={styles.previewGrid}>
          <div className={`${styles.previewItem} ${styles.tall}`}>
            <Image
              src="/images/hero_portrait_woman_1765964013088.png"
              alt="Design"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.previewItem}>
            <Image
              src="/images/hero_team_working_1765964329903.png"
              alt="Strategy"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={`${styles.previewItem} ${styles.medium}`}>
            <Image
              src="/images/hero_portrait_man_1765964153979.png"
              alt="Growth"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className={styles.scrollIndicator}>
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

