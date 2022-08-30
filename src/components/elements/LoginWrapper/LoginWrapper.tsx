import React from 'react'

import styles from './LoginWrapper.module.scss'

interface LoginWrapperProps {
  children: React.ReactNode
}

const LoginWrapper: React.FC<LoginWrapperProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}

export default LoginWrapper