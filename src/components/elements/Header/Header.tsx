import React from 'react'

import styles from './Header.module.scss'

import AuthButtons from '../../UI/Auth/AuthButtons/AuthButtons'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>NETFLIX</h1>
      <AuthButtons />
    </header>
  )
}

export default Header