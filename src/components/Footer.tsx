import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div>
                        <h2 className={styles.logo}>Ybor.</h2>
                        <p className={styles.copy}>&copy; {new Date().getFullYear()} Ybor Digital Marketing Services (OPC) Pvt. Ltd.</p>
                    </div>
                    <div className={styles.social}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="mailto:yborofficial@gmail.com">Email</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
