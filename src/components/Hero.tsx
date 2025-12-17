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
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
        },
    },
});

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background Blobs */}
            <div className={`${styles.blob} ${styles.blob1}`}></div>
            <div className={`${styles.blob} ${styles.blob2}`}></div>
            <div className={`${styles.blob} ${styles.blob3}`}></div>

            {/* Floating Animated Icons */}
            <motion.div
                className={styles.floatIcon}
                style={{ top: '15%', left: '10%' }}
                variants={floatVariant(0)}
                animate="animate"
            >
                <div className={styles.iconCircle} style={{ background: '#FECFEF' }}>🎨</div>
            </motion.div>
            <motion.div
                className={styles.floatIcon}
                style={{ top: '25%', right: '15%' }}
                variants={floatVariant(1)}
                animate="animate"
            >
                <div className={styles.iconCircle} style={{ background: '#8fd3f4' }}>📈</div>
            </motion.div>
            <motion.div
                className={styles.floatIcon}
                style={{ bottom: '20%', left: '15%' }}
                variants={floatVariant(2)}
                animate="animate"
            >
                <div className={styles.iconCircle} style={{ background: '#fbc2eb' }}>💡</div>
            </motion.div>

            <div className={`container ${styles.content}`}>
                <p className={styles.eyebrow}>Powering your business with Ybor.</p>
                <h1 className={styles.title}>
                    <span className="text-highlight">Ybor Digital Marketing</span> <br />
                    agency
                </h1>
                <p className={styles.subtitle}>
                    We craft digital content strategies that connect businesses with customers, driving growth and engagement.
                </p>
                <div className={styles.actions}>
                    <Link href="#contact" className="btn btn-primary">
                        Get Started
                    </Link>
                </div>

                {/* Decorative Grid with Real Images */}
                <div className={styles.imageGrid}>
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
                        <div className={styles.centerBadge}>
                            Ybor<br />Agency
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
                </div>

                {/* Stats */}
                <div className={styles.stats}>
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
                </div>
            </div>
        </section>
    );
}
