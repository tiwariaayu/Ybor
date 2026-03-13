"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';
import LoginModal from './LoginModal';

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const navLinks = [
        { name: 'Work', href: '#solutions' },
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Reviews', href: '#testimonials' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <>
            <motion.nav
                className={styles.nav}
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-150%" },
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

                    {/* Desktop Links */}
                    <div className={styles.links}>
                        {navLinks.map((item) => (
                            <Link key={item.name} href={item.href} className={styles.linkItem}>
                                <span className="relative z-10">{item.name}</span>
                            </Link>
                        ))}
                        <button 
                            className={styles.loginBtn}
                            onClick={() => setIsLoginOpen(true)}
                        >
                            Login
                        </button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.navBtn}
                            style={{ fontSize: '0.9rem' }}
                            aria-label="Get Started"
                        >
                            Get Started
                        </motion.button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className={styles.mobileToggle} 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        <div className={styles.mobileMenuContent}>
                            {navLinks.map((item) => (
                                <Link 
                                    key={item.name} 
                                    href={item.href} 
                                    className={styles.mobileLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button 
                                className={styles.mobileLoginBtn}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsLoginOpen(true);
                                }}
                            >
                                Login
                            </button>
                            <button className={styles.mobileNavBtn}>Get Started</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <LoginModal 
                isModalVisible={isLoginOpen} 
                onToggleVisibility={() => setIsLoginOpen(false)} 
            />
        </>
    );
}
