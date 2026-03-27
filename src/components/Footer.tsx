"use client";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <h2 className={styles.logo}>Ybor.</h2>
            <p className={styles.description}>
              Empowering global brands with data-driven digital marketing
              strategies that deliver transformative results and sustainable
              growth.
            </p>
          </div>

          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Platform</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#solutions">Work</Link>
              </li>
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="#process">Process</Link>
              </li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Capabilities</h3>
            <ul>
              <li>SEO Mastery</li>
              <li>Paid Acquisition</li>
              <li>Content Design</li>
              <li>Conversion Optimization</li>
            </ul>
          </div>

          <div className={styles.newsletterCol}>
            <h3 className={styles.colTitle}>Stay Updated</h3>
            <p className={styles.newsletterText}>
              Get the latest marketing insights delivered to your inbox.
            </p>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">
                Email Address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="email@example.com"
                className={styles.input}
                required
              />
              <button
                type="submit"
                className={styles.btn}
                aria-label="Subscribe"
              >
                →
              </button>
            </form>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Ybor Digital Marketing Services (OPC)
            Pvt. Ltd.
          </p>
          <div className={styles.social}>
            <a
              href="https://twitter.com/ybordigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/company/ybordigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/ybordigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
