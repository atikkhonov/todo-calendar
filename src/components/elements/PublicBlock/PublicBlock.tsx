import React from 'react'
import styles from './PublicBlock.module.scss'

const PublicBlock = () => {
  return (
    <>
      <div className={styles.public}>
        <h1>Usernames & Passwords</h1>
        <h2>testUser / qwerty123</h2>
        <h2>testAdmin / asdfgh456</h2>
        <h2>indextsx13 / zxcvbn789</h2>
        
        <div className={styles.deploy}>
          <h1>Deploy</h1>
          <h2>u-time.vercel.app</h2>
          <h2>u-time-atikkhonov.vercel.app</h2>
        </div>
      </div>
    </>
  )
}

export default PublicBlock