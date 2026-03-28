"use client";
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import styles from './Services.module.css';

const services = [
    {
        title: "Paid Media",
        description: "Maximize ROI with targeted ad campaigns that convert. We handle everything from strategy to execution.",
        icon: "📢",
        image: "/images/bento_paid_media_1765965220678.png"
    },
    {
        title: "SEO & Optimization",
        description: "Rank higher and drive organic traffic through technical SEO and content mapping.",
        icon: "📊",
        image: "/images/bento_seo_1765965345595.png"
    },
    {
        title: "Email Marketing",
        description: "Nurture leads into loyal customers with personalized automation workflows.",
        icon: "📨",
        image: "/images/bento_email_marketing_1765965547061.png"
    },
    {
        title: "Content Strategy",
        description: "Storytelling that builds your brand essence and connects with your audience on a deeper level.",
        icon: "✍️",
        image: "/images/bento_content_strategy_1765965701960.png"
    },
    {
        title: "Social Media",
        description: "Engage your community and build brand awareness on platforms that matter most to your business.",
        icon: "📱",
        image: "/images/hero_portrait_woman_1765964013088.png"
    },
    {
        title: "Web Development",
        description: "Modern, fast, and responsive websites built with the latest technologies.",
        icon: "💻",
        image: "/images/hero_team_working_1765964329903.png"
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

const itemVars: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.6, 
            ease: [0.16, 1, 0.3, 1] as any
        } 
    }
};

export default function Services() {
    return (
        <section id="services" className={`section-padding ${styles.services}`}>
            <div className="container">
                <div className={styles.header}>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className={styles.titleTag}
                    >
                        Our Services
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={styles.heading}
                    >
                        Digital Excellence <br />
                        <span className="text-gradient">Redefined.</span>
                    </motion.h2>
                </div>

                <motion.div
                    className="masonry-grid"
                    variants={containerVars}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`card ${styles.serviceCard}`}
                            variants={itemVars}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className={styles.cardImage}
                                />
                                <div className={styles.iconOverlay}>
                                    {service.icon}
                                </div>
                            </div>
                            <div className={styles.cardBody}>
                                <h3 className={styles.title}>{service.title}</h3>
                                <p className={styles.desc}>{service.description}</p>
                                <button className={styles.learnMore}>
                                    Learn More ➔
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

