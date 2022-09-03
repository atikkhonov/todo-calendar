import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link to="/main">
        <div className={styles.item}>Main</div>
      </Link>
      <Link to="/public">
        <div className={styles.item}>Public</div>
      </Link>
    </div>
  )
}

export default Navigation