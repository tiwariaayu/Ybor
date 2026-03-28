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
                <div className={`card ${styles.wrapper}`}>
                    <div className={styles.info}>
                        <div className={styles.titleTag}>Contact</div>
                        <h2 className={styles.heading}>Start a <br /> Conversation.</h2>
                        <p className={styles.text}>
                            We help brands scale and grow. Reach out to us for a free digital audit and consultation.
                        </p>

                        <div className={styles.details}>
                            <div className={styles.detailCard}>
                                <span className={styles.detailIcon}>📧</span>
                                <div>
                                    <h3>Email</h3>
                                    <p>ybor.marketing@gmail.com</p>
                                </div>
                            </div>
                            <div className={styles.detailCard}>
                                <span className={styles.detailIcon}>📱</span>
                                <div>
                                    <h3>Phone</h3>
                                    <p>+91 84539 0000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formCol}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.inputRow}>
                                <div className={styles.inputGroup}>
                                    <input id="name" type="text" placeholder="Full Name" className={styles.input} required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <input id="email" type="email" placeholder="Email Address" className={styles.input} required />
                                </div>
                            </div>
                            <div className={styles.inputGroup}>
                                <textarea id="message" placeholder="What can we help you with?" rows={5} className={styles.textarea} required></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                style={{ width: '100%' }}
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>

                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className={styles.successMsg}
                                    >
                                        Message sent! We&apos;ll get back to you soon.
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

