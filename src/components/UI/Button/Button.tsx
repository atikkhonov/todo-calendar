import React from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
  children: any;
  callback: any;
}

const Button: React.FC<ButtonProps> = ({ children, callback }) => {
  return (
    <button 
      onClick={callback} 
      className={styles.button}
    >
      {children}
    </button>
  )
}

export default Button