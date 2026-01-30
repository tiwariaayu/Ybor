"use client";
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.topSection}>
                    <div className={styles.brandCol}>
                        <h2 className={styles.logo}>Ybor.</h2>
                        <p className={styles.description}>
                            Empowering businesses with data-driven digital marketing strategies that deliver real results.
                        </p>
                    </div>
                    
                    <div className={styles.linksCol}>
                        <h3 className={styles.colTitle}>Quick Links</h3>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="#about">About Us</Link></li>
                            <li><Link href="#services">Services</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linksCol}>
                        <h3 className={styles.colTitle}>Services</h3>
                        <ul>
                            <li>Paid Media</li>
                            <li>SEO Optimization</li>
                            <li>Content Strategy</li>
                            <li>Email Marketing</li>
                        </ul>
                    </div>

                    <div className={styles.newsletterCol}>
                        <h3 className={styles.colTitle}>Subscribe</h3>
                        <p className={styles.newsletterText}>Get the latest marketing insights delivered to your inbox.</p>
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your email address" className={styles.input} />
                            <button type="submit" className={styles.btn}>→</button>
                        </form>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <p className={styles.copy}>&copy; {new Date().getFullYear()} Ybor Digital Marketing Services (OPC) Pvt. Ltd.</p>
                    <div className={styles.social}>
                        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
