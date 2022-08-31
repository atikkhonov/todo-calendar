import React from 'react'

import useTypedDispatch from '../../../hooks/useTypedDispatch'
import useTypedSelector from '../../../hooks/useTypedSelector'
import { signIn, signOut } from '../../../redux/slices/AuthSlice'
import Button from '../../UI/Button/Button'

import styles from './Header.module.scss' 

const Header: React.FC = () => {
  const isAuth = useTypedSelector(state => state.authReducer.isAuth)
  const dispatch = useTypedDispatch()
  
  const onClickSignInHandler = () => {
    dispatch(signIn())
  }

  const onClickSignOutHandler = () => {
    dispatch(signOut())
  }
  
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>uTime</div>
      </div>
      <div className={styles.right}>
        {
          isAuth
          ? <>
            <div className={styles.user}>atikkhonov</div>
            <Button text='sign out' onClick={onClickSignOutHandler} />
          </>
            : <Button text='sign in' onClick={onClickSignInHandler} />
        }
      </div>
    </header>
  )
}

export default Header