"use client";
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.logo}>Ybor.</h2>
                    <ul className={styles.links}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="#solutions">Work</Link></li>
                        <li><Link href="#services">Services</Link></li>
                        <li><Link href="#process">Process</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
                    <div className={styles.social}>
                        <a href="https://twitter.com/ybordigital" target="_blank" rel="noopener noreferrer">TW</a>
                        <a href="https://linkedin.com/company/ybordigital" target="_blank" rel="noopener noreferrer">LN</a>
                        <a href="https://instagram.com/ybordigital" target="_blank" rel="noopener noreferrer">IG</a>
                    </div>
                    <p className={styles.copy}>
                        &copy; {new Date().getFullYear()} Ybor Digital Marketing Services (OPC) Pvt. Ltd. <br />
                        Crafted with passion for brands that matter.
                    </p>
                </div>
            </div>
        </footer>
    );
}

