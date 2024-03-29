import React from 'react'
import styles from '../styles/Global'
const Button = ({ assetUrl, link }) => {
  return (

    <div className={`${styles.btnBlack} ${assetUrl} `}
      onClick={() => window.open(link, "_blank")}
    >
      <img src={assetUrl} alt="Expo Icon"
        className={`${styles.btnIcon}`}
      />
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-normal text-xs`}>
          View it on
        </p>
        <p className={`${styles.btnText} font-bold text-small`}>
          Expo Store
        </p>
      </div>
    </div>

  )
}

export default Button