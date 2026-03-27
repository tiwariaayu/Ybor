"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import styles from "./Services.module.css";

const services = [
  {
    title: "Performance Marketing",
    description: "Data-driven campaigns that scale your ROI through advanced targeting and optimization.",
    icon: "📈",
    className: styles.cardLarge,
    image: "/images/bento_paid_media_1765965220678.png",
  },
  {
    title: "SEO Mastery",
    description: "Dominating search results through technical excellence and content strategy.",
    icon: "🔍",
    className: styles.cardDefault,
    image: "/images/bento_seo_1765965345595.png",
  },
  {
    title: "Brand Identity",
    description: "Crafting visual stories that resonate with your audience and build lasting trust.",
    icon: "🎨",
    className: styles.cardDefault,
    image: "/images/bento_content_strategy_1765965701960.png",
  },
  {
    title: "Conversion Engine",
    description: "Turning traffic into loyal customers with high-performance landing pages.",
    icon: "⚡",
    className: styles.cardLarge,
    image: "/images/bento_email_marketing_1765965547061.png",
  },
  {
    title: "Content Ecosystems",
    description: "Holistic content strategies that engage users across every digital touchpoint.",
    icon: "🌐",
    className: styles.cardWide,
    image: "/images/hero_team_working_1765964329903.png",
  },
];

const containerVars: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVars: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className={`section-padding ${styles.services}`}>
      <div className="container">
        <div className={styles.header}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.heading}
          >
            Our <span className="text-gradient-primary">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className={styles.subheading}
          >
            Engineering growth through a blend of data-driven strategies and
            premium digital experiences.
          </motion.p>
        </div>

        <motion.div
          className={styles.bentoGrid}
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`${styles.card} ${service.className}`}
              variants={itemVars}
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
