"use client";
import Link from 'next/link';
import styles from './CTA.module.css';
import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <section className={`section-padding ${styles.cta}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <motion.h2 
                        className={styles.heading}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Ready to scale your business?
                    </motion.h2>
                    <motion.p 
                        className={styles.subheading}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Join hundreds of successful brands trusting Ybor for their digital growth.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                         <Link href="#contact" className="btn btn-primary" style={{ background: 'white', color: 'black' }}>
                            Start Your Project
                        </Link>
                    </motion.div>
                </div>
                {/* Decorative Elements */}
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
            </div>
        </section>
    );
}
