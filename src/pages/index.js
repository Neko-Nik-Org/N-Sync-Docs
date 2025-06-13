import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import CardSwap, { Card } from "../components/HomepageFeatures/CardSwap";
import { useEffect, useState } from "react";


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile-sized
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className={styles.heroSection}>
      <div className={styles.leftContent}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>
          <span className={styles.highlight}>Seamless file synchronization</span>{" "}
          between local and remote servers —{" "}
          <span className={styles.highlight}>fast</span>,{" "}
          <span className={styles.highlight}>reliable</span>, and{" "}
          <span className={styles.highlight}>automatic</span>.
        </p>
        <p className={styles.description}>
          Lightweight, continuous file sync with no extra server dependencies.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>

      <div className={styles.rightContent}>
        {isMobile ? (
          // Static card for mobile view
          <div className={styles.staticCard}>
            <div className={styles.card}>
              <h3>Lightweight & Secure</h3>
              <p>
                Minimal resource usage and robust encryption keep your data safe and your workflow fast.
              </p>
            </div>
          </div>
        ) : (
          // Card animation for desktop
          <div className={styles.cardWrapper}>
            <CardSwap
              cardDistance={40}
              verticalDistance={30}
              delay={4000}
              pauseOnHover={true}
              customClass={styles.card}
            >
              <Card>
                <h3>Instant Sync</h3>
                <p>
                  Effortlessly synchronize files and folders between your local machine and remote servers in real time.
                </p>
              </Card>
              <Card>
                <h3>Conflict-Free Collaboration</h3>
                <p>
                  Work with your team without worrying about version conflicts—N-Sync handles merges and updates automatically.
                </p>
              </Card>
              <Card>
                <h3>Lightweight & Secure</h3>
                <p>
                  Minimal resource usage and robust encryption keep your data safe and your workflow fast.
                </p>
              </Card>
            </CardSwap>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="N-Sync - DevOps automation tool that streamlines your workflows"
    >
      <div className="homepage-section">
        <HomepageHeader />
      </div>

      <main className="homepage-section-alt">
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
