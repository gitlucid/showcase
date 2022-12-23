import React from 'react'
import assets from '../assets';
import styles from '../styles/Global';

const FeatureCard = ({iconUrl, iconText}) => (
  <div className={`${styles.featureCard}`}>
    <img className={styles.featureImg} src={iconUrl} alt={iconText}/>
    <p className={styles.featureText}>{iconText}</p>
    </div>
)

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Platform</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>LucidNature has been developed using the cross-platform technology, React Native</p>
        </div>
        <div className={`${styles.flexWrap}`}>
          <FeatureCard iconUrl={assets.react} iconText="React Native" />
          <FeatureCard iconUrl={assets.javascript} iconText="Javascript" />
        </div>
      </div>
    </div>
  )
}

export default Features