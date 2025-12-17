"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            className={styles.nav}
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
        >
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logoWrapper}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image
                            src="/logo.jpg"
                            alt="Ybor Digital"
                            width={40}
                            height={40}
                            className={styles.logoImage}
                        />
                    </motion.div>
                    <span className={styles.logoText}>Ybor</span>
                </Link>
                <div className={styles.links}>
                    {['Services', 'About', 'Contact'].map((item) => (
                        <Link key={item} href={`#${item.toLowerCase()}`} className={styles.linkItem}>
                            <span className="relative z-10">{item}</span>
                            {/* Hover underline effect is handled via CSS or we can add motion span here */}
                        </Link>
                    ))}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary"
                        style={{ padding: '0.6rem 1.8rem', fontSize: '0.9rem' }}
                    >
                        Get Started
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
}
