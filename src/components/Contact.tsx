"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Contact.module.css';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        
        // Simulate form submission
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className={`section-padding ${styles.contact}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <span className={styles.eyebrow}>Contact Us</span>
                        <h2 className={styles.heading}>Let&apos;s Start a <br /> Project Together</h2>
                        <p className={styles.text}>
                            We help brands scale and grow. Reach out to us for a free consultation.
                        </p>

                        <div className={styles.details}>
                            <motion.div 
                                whileHover={{ x: 10 }}
                                className={styles.detailCard}
                            >
                                <span className={styles.detailIcon}>📧</span>
                                <div>
                                    <h3>Chat with us</h3>
                                    <p>ybor.marketing@gmail.com</p>
                                </div>
                            </motion.div>
                            <motion.div 
                                whileHover={{ x: 10 }}
                                className={styles.detailCard}
                            >
                                <span className={styles.detailIcon}>📱</span>
                                <div>
                                    <h3>Call us</h3>
                                    <p>+91 84539 0000</p>
                                </div>
                            </motion.div>
                            <motion.div 
                                whileHover={{ x: 10 }}
                                className={styles.detailCard}
                            >
                                <span className={styles.detailIcon}>📍</span>
                                <div>
                                    <h3>Visit us</h3>
                                    <p> Assam, India</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className={styles.formWrapper}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name">Name</label>
                                <input id="name" type="text" placeholder="John Doe" className={styles.input} required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" placeholder="john@example.com" className={styles.input} required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" placeholder="Tell us about your project..." rows={4} className={styles.textarea} required></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className={styles.submitBtn}
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'} <span>→</span>
                            </button>

                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className={styles.successMsg}
                                    >
                                        Message sent successfully! We&apos;ll get back to you soon.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
