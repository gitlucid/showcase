import React from 'react'
import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>View the project!</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Scan the QR Code below with your mobile device to view this project.</p>
        </div>
                
            <div className={`flex 
       
         mt-5`}>
                <img src={assets.qr} alt="Download Now" className={`${styles.qrImg}`} />
            </div>
        <div className={`${styles.flexCenter}`}>
          <img src={assets.scene} alt="Download" className={`${styles.fullImg}`}/>
        </div>
      </div>

    </div>
  )
}

export default Download