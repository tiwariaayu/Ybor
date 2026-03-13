"use client";
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './LoginModal.module.css';

interface AuthenticationModalProps {
    isModalVisible: boolean;
    onToggleVisibility: () => void;
}

/**
 * AuthenticationModal provides a secure-looking entry point for user sessions.
 * Current implementation simulates a backend verification process.
 */
export default function LoginModal({ isModalVisible, onToggleVisibility }: AuthenticationModalProps) {
    const [credentialIdentifier, setCredentialIdentifier] = useState('');
    const [accessSecret, setAccessSecret] = useState('');
    const [authStatus, setAuthStatus] = useState<'idle' | 'authenticating' | 'authenticated' | 'unauthorized'>('idle');
    const [validationError, setValidationError] = useState('');

    const handleAuthentication = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setValidationError('');
        
        // Basic input validation
        const normalizedIdentifier = credentialIdentifier.trim();
        if (normalizedIdentifier.length < 3) {
            setValidationError('Identifier must be at least 3 characters.');
            return;
        }

        setAuthStatus('authenticating');

        // Simulate network latency for a more realistic authentication flow
        await new Promise(resolve => setTimeout(resolve, 1200));

        if (normalizedIdentifier === 'tiwariayushman' && accessSecret === 'tiwariayushman') {
            setAuthStatus('authenticated');
            setTimeout(() => {
                onToggleVisibility();
                // Reset states after modal closure animation
                setTimeout(() => {
                    setAuthStatus('idle');
                    setCredentialIdentifier('');
                    setAccessSecret('');
                }, 300);
            }, 1800);
        } else {
            setAuthStatus('unauthorized');
            setValidationError('The credentials provided do not match our records.');
        }
    }, [credentialIdentifier, accessSecret, onToggleVisibility]);

    return (
        <AnimatePresence>
            {isModalVisible && (
                <div className={styles.authOverlay} onClick={onToggleVisibility}>
                    <motion.div 
                        className={styles.authContainer} 
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.95, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 15 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                    >
                        <button 
                            className={styles.dismissButton} 
                            onClick={onToggleVisibility}
                            aria-label="Close authentication modal"
                        >
                            &times;
                        </button>
                        
                        <div className={styles.authContent}>
                            <header className={styles.authHeader}>
                                <h2 className={styles.authTitle}>Account Access</h2>
                                <p className={styles.authSubtitle}>Secure login for Jai Bajrang Bali partners.</p>
                            </header>

                            {authStatus === 'authenticated' ? (
                                <motion.div 
                                    className={styles.authSuccessFeedback}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <span className={styles.successIcon}>✓</span>
                                    <p>Welcome back, <strong>Tiwari Ayushman</strong>. Redirecting to your dashboard...</p>
                                </motion.div>
                            ) : (
                                <form className={styles.authForm} onSubmit={handleAuthentication}>
                                    <div className={styles.formField}>
                                        <label htmlFor="auth-identifier">Email or Username</label>
                                        <input 
                                            id="auth-identifier"
                                            type="text" 
                                            autoComplete="username"
                                            placeholder="e.g. tiwariayushman" 
                                            value={credentialIdentifier}
                                            onChange={(e) => setCredentialIdentifier(e.target.value)}
                                            disabled={authStatus === 'authenticating'}
                                            required 
                                        />
                                    </div>
                                    <div className={styles.formField}>
                                        <div className={styles.labelRow}>
                                            <label htmlFor="auth-secret">Password</label>
                                            <button type="button" className={styles.inlineAction}>Forgot?</button>
                                        </div>
                                        <input 
                                            id="auth-secret"
                                            type="password" 
                                            autoComplete="current-password"
                                            placeholder="••••••••" 
                                            value={accessSecret}
                                            onChange={(e) => setAccessSecret(e.target.value)}
                                            disabled={authStatus === 'authenticating'}
                                            required 
                                        />
                                    </div>
                                    
                                    {validationError && (
                                        <motion.p 
                                            className={styles.authErrorMessage}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                        >
                                            {validationError}
                                        </motion.p>
                                    )}

                                    <button 
                                        type="submit" 
                                        className={styles.authSubmitButton}
                                        disabled={authStatus === 'authenticating'}
                                    >
                                        {authStatus === 'authenticating' ? (
                                            <span className={styles.loader}>Authenticating...</span>
                                        ) : 'Sign In'}
                                    </button>

                                    <footer className={styles.authFooter}>
                                        <span>New to the platform?</span>
                                        <button type="button" className={styles.inlineAction}>Request Access</button>
                                    </footer>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
