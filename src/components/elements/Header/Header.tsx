import React from 'react'

import useTypedDispatch from '../../../hooks/useTypedDispatch'
import useTypedSelector from '../../../hooks/useTypedSelector'
import { logout } from '../../../redux/slices/AuthSlice'
import { modalOpen } from '../../../redux/slices/ModalSlice'
import Button from '../../UI/Button/Button'

import styles from './Header.module.scss' 

const Header: React.FC = () => {
  const { isAuth, user } = useTypedSelector(state => state.authReducer)
  const dispatch = useTypedDispatch()
  
  const onClickSignInHandler = () => {
    dispatch(modalOpen())
  }

  const onClickSignOutHandler = () => {
    dispatch(logout())
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
              <div className={styles.user}>{user.username}</div>
              <Button text='sign out' onClick={onClickSignOutHandler} />
            </>
            : <Button text='sign in' onClick={onClickSignInHandler} />
        }
      </div>
    </header>
  )
}

export default Header