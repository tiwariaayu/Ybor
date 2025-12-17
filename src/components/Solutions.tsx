import Image from "next/image";
import styles from "./Solutions.module.css";

export default function Solutions() {
    return (
        <section className={`section-padding ${styles.solutions}`}>
            <div className="container">
                {/* Header Section */}
                <div className={styles.header}>
                    <div className={styles.titleWrapper}>
                        <div className={styles.accentLine}></div>
                        <h2 className={styles.title}>Digital agency problems <br /> and their best solutions</h2>
                    </div>
                    <div className={styles.decorBox}>
                        <div className={styles.boxGreen}></div>
                        <div className={styles.boxBlack}></div>
                    </div>
                </div>

                {/* Content Layout */}
                <div className={styles.content}>
                    {/* Left Column (Large Image) */}
                    <div className={styles.leftCol}>
                        <div className={styles.largeImagePlaceholder}>
                            <Image
                                src="/images/solutions_team_meeting_1765963663297.png"
                                alt="Team meeting"
                                fill
                                className={styles.imageConfig}
                            />
                        </div>
                    </div>

                    {/* Right Column (Text + Small Image) */}
                    <div className={styles.rightCol}>
                        <p className={styles.description}>
                            Crafting compelling digital experiences that captivate audiences and drive meaningful connections.
                            Our digital agency combines innovation, strategy, and expertise to fuel your online success.
                            We denounce righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.
                        </p>

                        <div className={styles.subContent}>
                            <div className={styles.badge}>
                                <div className={styles.badgeText}>
                                    2018 • LEADING DIGITAL AGENCY •
                                </div>
                                <div className={styles.badgeArrow}>↗</div>
                            </div>

                            <div className={styles.smallImagePlaceholder}>
                                <Image
                                    src="/images/solutions_analytics_dashboard_1765963792409.png"
                                    alt="Analytics Dashboard"
                                    fill
                                    className={styles.imageConfig}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
