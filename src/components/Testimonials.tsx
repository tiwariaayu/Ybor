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
                    <h2 className={styles.heading}>What Our Clients Say</h2>
                    <p className={styles.subheading}>Trust is built on results.</p>
                </div>

                <div className={styles.marqueeWrapper}>
                    <motion.div 
                        className={styles.marqueeTrack}
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    >
                        {/* Double the array for seamless loop */}
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div key={i} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.avatar}>{t.image}</div>
                                    <div>
                                        <h3 className={styles.name}>{t.name}</h3>
                                        <p className={styles.role}>{t.role}</p>
                                    </div>
                                </div>
                                <p className={styles.text}>&quot;{t.text}&quot;</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
