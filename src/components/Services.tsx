"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Services.module.css';

const services = [
    {
        title: "Paid Media",
        description: "Maximize ROI with targeted ad campaigns that convert.",
        icon: "📢",
        className: styles.cardLarge,
        color: styles.blueGradient,
        image: "/images/bento_paid_media_1765965220678.png"
    },
    {
        title: "SEO & Optimization",
        description: "Rank higher and drive organic traffic.",
        icon: "📊",
        className: styles.cardDefault,
        color: styles.purpleGradient,
        image: "/images/bento_seo_1765965345595.png"
    },
    {
        title: "Email Marketing",
        description: "Nurture leads into loyal customers.",
        icon: "📨",
        className: styles.cardDefault,
        color: styles.greenGradient,
        image: "/images/bento_email_marketing_1765965547061.png"
    },
    {
        title: "Content Strategy",
        description: "Storytelling that builds your brand.",
        icon: "✍️",
        className: styles.cardWide,
        color: styles.orangeGradient,
        image: "/images/bento_content_strategy_1765965701960.png"
    }
];

const containerVars = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Services() {
    return (
        <section id="services" className={`section-padding ${styles.services}`}>
            <div className="container">
                <div className={styles.header}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={styles.heading}
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={styles.subheading}
                    >
                        Holistic digital solutions engineered for growth.
                    </motion.p>
                </div>

                <motion.div
                    className={styles.bentoGrid}
                    variants={containerVars}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.card} ${service.className} ${service.color}`}
                            variants={itemVars}
                            whileHover={{ y: -5 }}
                        >
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className={styles.cardImage}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className={styles.overlay}></div>

                            <div className={styles.cardContent}>
                                <div className={styles.iconWrapper}>
                                    <span className={styles.icon}>{service.icon}</span>
                                </div>
                                <div>
                                    <h3 className={styles.title}>{service.title}</h3>
                                    <p className={styles.desc}>{service.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
