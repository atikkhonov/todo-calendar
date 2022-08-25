import React from 'react'
import styles from './AuthButtons.module.scss'

const AuthButtons = () => {
  return (
    <div className={styles.buttons}>
      <button className={styles['sign-in']}>Sign In</button>
      <button className={styles['sign-up']}>Sign Up</button>
    </div>
  )
}

export default AuthButtons