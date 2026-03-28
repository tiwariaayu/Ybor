"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import styles from "./Solutions.module.css";

const portfolioItems = [
    {
        title: "Brand Transformation",
        category: "Creative Strategy",
        image: "/images/solutions_team_meeting_1765963663297.png",
        tall: true
    },
    {
        title: "Analytics Dashboard",
        category: "Data & Insights",
        image: "/images/solutions_analytics_dashboard_1765963792409.png",
        tall: false
    },
    {
        title: "Growth Marketing",
        category: "Paid Media",
        image: "/images/hero_portrait_woman_1765964013088.png",
        tall: false
    },
    {
        title: "Web Experience",
        category: "Development",
        image: "/images/hero_team_working_1765964329903.png",
        tall: true
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Solutions() {
    return (
        <section id="solutions" className={`section-padding ${styles.solutions}`}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.titleTag}>Portfolio</div>
                    <h2 className={styles.heading}>Selected Projects.</h2>
                </div>

                <motion.div 
                    className="masonry-grid"
                    variants={containerVars}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {portfolioItems.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className={`card ${styles.portfolioCard} ${item.tall ? styles.tall : ''}`}
                            variants={itemVars}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <div className={styles.content}>
                                        <span className={styles.category}>{item.category}</span>
                                        <h3 className={styles.itemTitle}>{item.title}</h3>
                                    </div>
                                    <div className={styles.arrow}>↗</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}


