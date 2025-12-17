import styles from './Contact.module.css';

export default function Contact() {
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
                            <div className={styles.detailCard}>
                                <span className={styles.detailIcon}>📧</span>
                                <div>
                                    <h3>Chat with us</h3>
                                    <p>yborofficial@gmail.com</p>
                                </div>
                            </div>
                            <div className={styles.detailCard}>
                                <span className={styles.detailIcon}>📱</span>
                                <div>
                                    <h3>Call us</h3>
                                    <p>+91 84539 24766</p>
                                </div>
                            </div>
                            <div className={styles.detailCard}>
                                <span className={styles.detailIcon}>📍</span>
                                <div>
                                    <h3>Visit us</h3>
                                    <p>Nagaon, Assam, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formWrapper}>
                        <form className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label>Name</label>
                                <input type="text" placeholder="John Doe" className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Email</label>
                                <input type="email" placeholder="john@example.com" className={styles.input} />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Message</label>
                                <textarea placeholder="Tell us about your project..." rows={4} className={styles.textarea}></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>
                                Send Message <span>→</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
