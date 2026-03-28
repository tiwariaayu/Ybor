"use client";
import styles from './Process.module.css';
import { motion, Variants } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "We dive deep into your brand, understanding your goals, audience, and market landscape."
    },
    {
        number: "02",
        title: "Strategy",
        description: "We craft a bespoke roadmap, selecting the right channels and tactics to effective growth."
    },
    {
        number: "03",
        title: "Execution",
        description: "Our experts bring the strategy to life with high-quality content, ads, and technical optimization."
    },
    {
        number: "04",
        title: "Growth",
        description: "We monitor, analyze, and optimize performance ensuring sustainable long-term success."
    }
];

const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVars: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Process() {
    return (
        <section id="process" className={`section-padding ${styles.process}`}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.titleTag}>How we work</div>
                    <h2 className={styles.heading}>The Path to Success.</h2>
                </div>

                <motion.div 
                    className={styles.stepsContainer}
                    variants={containerVars}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index}
                            className={`card ${styles.stepCard}`}
                            variants={itemVars}
                        >
                            <span className={styles.number}>{step.number}</span>
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

