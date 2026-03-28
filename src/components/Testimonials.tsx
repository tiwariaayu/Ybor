"use client";
import styles from './Testimonials.module.css';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "David Smith",
        role: "CEO, TechFlow",
        text: "Ybor transformed our online presence. Their strategic approach to digital marketing doubled our leads in just 3 months.",
        image: "👨‍💻"
    },
    {
        name: "Sarah Johnson",
        role: "Marketing Director, Bloom",
        text: "The team at Ybor is incredible. Creative, data-driven, and results-oriented. Highly recommend them!",
        image: "👩‍💼"
    },
    {
        name: "Michael Brown",
        role: "Founder, StartUp Inc",
        text: "Top-notch service! They understood our brand voice perfectly and delivered campaigns that truly resonated.",
        image: "🚀"
    },
    {
        name: "Emily Davis",
        role: "CMO, GreenLeaf",
        text: "A true partner in growth. Ybor's insights helped us navigate a competitive market and come out on top.",
        image: "🌿"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className={`section-padding ${styles.testimonials}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Inspired by Results</h2>
                    <p className={styles.subheading}>See what our clients are saying about the Ybor experience.</p>
                </div>

                <div className="masonry-grid">
                    {testimonials.map((t, i) => (
                        <motion.div 
                            key={i} 
                            className={`masonry-item ${styles.card}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.avatar}>{t.image}</div>
                                <div>
                                    <h3 className={styles.name}>{t.name}</h3>
                                    <p className={styles.role}>{t.role}</p>
                                </div>
                            </div>
                            <p className={styles.text}>&quot;{t.text}&quot;</p>
                            <div className={styles.cardFooter}>
                                <div className={styles.stars}>★★★★★</div>
                                <div className={styles.date}>Verified Client</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
