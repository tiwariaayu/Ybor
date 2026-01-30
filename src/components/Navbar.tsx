"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
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
                    {[
                        { name: 'Work', href: '#solutions' },
                        { name: 'Services', href: '#services' },
                        { name: 'Process', href: '#process' },
                        { name: 'Reviews', href: '#testimonials' },
                        { name: 'Contact', href: '#contact' }
                    ].map((item) => (
                        <Link key={item.name} href={item.href} className={styles.linkItem}>
                            <span className="relative z-10">{item.name}</span>
                        </Link>
                    ))}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={styles.navBtn}
                        style={{ fontSize: '0.9rem' }}
                    >
                        Get Started
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
}
