"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './LoginModal.module.css';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (email === 'tiwariayushman' && password === 'tiwariayushman') {
            setSuccess(true);
            setTimeout(() => {
                onClose();
                setSuccess(false);
                setEmail('');
                setPassword('');
            }, 2000);
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className={styles.overlay} onClick={onClose}>
                    <motion.div 
                        className={styles.modal} 
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    >
                        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
                        
                        <div className={styles.content}>
                            <h2 className={styles.title}>Login to Jai Bajrang Bali</h2>
                            <p className={styles.subtitle}>Welcome back! Please enter your details.</p>

                            {success ? (
                                <motion.div 
                                    className={styles.successMsg}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    Login Successful! Welcome, Tiwari Ayushman.
                                </motion.div>
                            ) : (
                                <form className={styles.form} onSubmit={handleSubmit}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="login-email">Email / Username</label>
                                        <input 
                                            id="login-email"
                                            type="text" 
                                            placeholder="Enter your email" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required 
                                        />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="login-password">Password</label>
                                        <input 
                                            id="login-password"
                                            type="password" 
                                            placeholder="••••••••" 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required 
                                        />
                                    </div>
                                    
                                    {error && <p className={styles.errorMsg}>{error}</p>}

                                    <button type="submit" className={styles.submitBtn}>
                                        Login
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
