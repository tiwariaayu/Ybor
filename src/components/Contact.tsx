"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className={`section-padding ${styles.contact}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className={styles.eyebrow}>Start a Conversation</span>
            <h2 className={styles.heading}>
              Ready to <span className="text-gradient-primary">Scale</span> <br />
              Your Business?
            </h2>
            <p className={styles.text}>
              We help brands scale and grow through precision marketing. Reach
              out for a bespoke strategy session.
            </p>

            <div className={styles.details}>
              <div className={styles.detailCard}>
                <span className={styles.detailIcon}>📧</span>
                <div>
                  <h3>Direct Message</h3>
                  <p>ybor.marketing@gmail.com</p>
                </div>
              </div>
              <div className={styles.detailCard}>
                <span className={styles.detailIcon}>📱</span>
                <div>
                  <h3>Hotline</h3>
                  <p>+91 84539 0000</p>
                </div>
              </div>
              <div className={styles.detailCard}>
                <span className={styles.detailIcon}>📍</span>
                <div>
                  <h3>Location</h3>
                  <p>Assam, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.formWrapper}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">FullName</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="j.doe@company.com"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Project Brief</label>
                <textarea
                  id="message"
                  placeholder="Tell us about your goals..."
                  rows={4}
                  className={styles.textarea}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send Brief"}{" "}
                <span>→</span>
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={styles.successMsg}
                  >
                    Your brief has been received. We&apos;ll be in touch.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
