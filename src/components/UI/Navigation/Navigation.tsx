import React from 'react'
import styles from './Navigation.module.scss'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const [activeItem, setActiveItem] = React.useState<number>(0)
  
  return (
    <div className={styles.navigation}>
      <Link to="/main">
        <div 
          onClick={() => setActiveItem(0)} 
          className={`${(activeItem === 0) ? (styles.active) : (styles.item)}`}
        >Main</div>
      </Link>
      <Link to="/public">
        <div 
          onClick={() => setActiveItem(1)} 
          className={`${(activeItem === 1) ? (styles.active) : (styles.item)}`}
        >Public</div>
      </Link>
    </div>
  )
}

export default Navigation