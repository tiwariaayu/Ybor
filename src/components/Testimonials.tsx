"use client";
import styles from './Testimonials.module.css';
import { motion, Variants } from 'framer-motion';

const testimonials = [
    {
        name: "David Smith",
        role: "CEO, TechFlow",
        text: "Ybor transformed our online presence. Their strategic approach to digital marketing doubled our leads in just 3 months. The attention to detail is unmatched in the industry.",
        image: "👨‍💻"
    },
    {
        name: "Sarah Johnson",
        role: "Marketing Director, Bloom",
        text: "The team at Ybor is incredible. Creative, data-driven, and results-oriented. Highly recommend them for any brand looking to scale! We've seen a 40% increase in conversion rates since partnering with them.",
        image: "👩‍💼"
    },
    {
        name: "Michael Brown",
        role: "Founder, StartUp Inc",
        text: "Top-notch service! They understood our brand voice perfectly and delivered campaigns that truly resonated with our target audience.",
        image: "🚀"
    },
    {
        name: "Emily Davis",
        role: "CMO, GreenLeaf",
        text: "A true partner in growth. Ybor's insights helped us navigate a competitive market and come out on top.",
        image: "🌿"
    },
    {
        name: "Alex Rivera",
        role: "Product Manager, Sync",
        text: "The design team at Ybor is top-tier. They don't just make things look good; they make them work. Our UX metrics have never been better.",
        image: "🎨"
    },
    {
        name: "Sophie Chen",
        role: "Founder, Zenith",
        text: "From SEO to Paid Media, Ybor covers it all with expertise and passion. It's rare to find an agency that cares as much about your ROI as you do.",
        image: "⭐"
    }
];

const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVars: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Testimonials() {
    return (
        <section id="testimonials" className={`section-padding ${styles.testimonials}`}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.titleTag}>Testimonials</div>
                    <h2 className={styles.heading}>Trusted by Visionaries.</h2>
                </div>

                <motion.div 
                    className="masonry-grid"
                    variants={containerVars}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {testimonials.map((t, i) => (
                        <motion.div 
                            key={i} 
                            className={`card ${styles.testimonialCard}`}
                            variants={itemVars}
                        >
                            <div className={styles.avatar}>{t.image}</div>
                            <p className={styles.text}>&quot;{t.text}&quot;</p>
                            <div className={styles.userInfo}>
                                <h3 className={styles.name}>{t.name}</h3>
                                <p className={styles.role}>{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

