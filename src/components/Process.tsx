"use client";
import styles from './Process.module.css';
import { motion } from 'framer-motion';

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

export default function Process() {
    return (
        <section id="process" className={`section-padding ${styles.process}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Our Process</h2>
                    <p className={styles.subheading}>A proven approach to digital success.</p>
                </div>

                <div className={styles.stepsGrid}>
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index}
                            className={styles.stepCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.circle}>
                                <svg width="200" height="200" viewBox="0 0 200 200" className={styles.circleSvg}>
                                    <circle cx="100" cy="100" r="90" fill="none" stroke="#e5e7eb" strokeWidth="2" />
                                    <circle cx="100" cy="100" r="90" fill="none" stroke="var(--primary)" strokeWidth="2" strokeDasharray="565" strokeDashoffset="565" className={styles.animatedCircle} />
                                </svg>
                                <span className={styles.number}>{step.number}</span>
                            </div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
