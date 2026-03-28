"use client";
import Link from 'next/link';
import styles from './CTA.module.css';
import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <section className={`section-padding ${styles.cta}`}>
            <div className="container">
                <motion.div 
                    className={`card ${styles.ctaCard}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Ready to transform <br /> <span className="text-gradient">your digital presence?</span></h2>
                        <p className={styles.subheading}>Join hundreds of successful businesses scaling with Ybor&apos;s data-driven strategies.</p>
                        <div className={styles.actions}>
                            <Link href="#contact" className="btn btn-primary">
                                Get Started Now
                            </Link>
                            <Link href="#solutions" className="btn btn-outline">
                                View Portfolio
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

