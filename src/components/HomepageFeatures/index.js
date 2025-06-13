import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import SpotlightCard from './SpotLightCard';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: (props) => <img src={require('@site/static/img/remotesync.png').default} alt="Powerful Automation" {...props} />,
    description: (
      <>
        N-Sync is a simple and intuitive tool that helps you sync files with minimal setup and configuration.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
   Svg: (props) => <img src={require('@site/static/img/focus.png').default} alt="Powerful Automation" {...props} />,
    description: (
      <>
       It automates repetitive sync tasks so you can concentrate on building valuable features.
      </>
    ),
  },
  {
    title: 'Powerful Automation',
    Svg: (props) => <img src={require('@site/static/img/powerful.png').default} alt="Powerful Automation" {...props} />,
    description: (
      <>
        N-Sync supports custom automation pipelines and integrates smoothly with your existing DevOps tools and infrastructure.
      </>
    ),
  },
];

function Feature({Svg, title, description, index}) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={styles.featureRow}>
      {isEven ? (
        <>
          <div className={styles.imageColumn}>
            <SpotlightCard 
              className={styles.imageWrapper} 
              spotlightColor="rgba(254, 132, 27, 0.2)"
            >
              <Svg className={styles.featureSvg} role="img" />
            </SpotlightCard>
          </div>
          <div className={styles.contentColumn}>
            <div className={styles.featureContent}>
              <Heading as="h3">{title}</Heading>
              <p>{description}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.contentColumn}>
            <div className={styles.featureContent}>
              <Heading as="h3">{title}</Heading>
              <p>{description}</p>
            </div>
          </div>
          <div className={styles.imageColumn}>
            <SpotlightCard 
              className={styles.imageWrapper}
              spotlightColor="rgba(254, 132, 27, 0.2)"
            >
              <Svg className={styles.featureSvg} role="img" />
            </SpotlightCard>
          </div>
        </>
      )}
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} index={idx} />
        ))}
      </div>
    </section>
  );
}
