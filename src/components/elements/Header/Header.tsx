import React from 'react'
import { Link } from 'react-router-dom'

import useTypedDispatch from '../../../hooks/useTypedDispatch'
import useTypedSelector from '../../../hooks/useTypedSelector'
import { AuthActionCreator } from '../../../redux/actionCreators/AuthActions'
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
    dispatch(AuthActionCreator.logout())
  }
  
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to="main">
          <div className={styles.logo}>
            uTime
          </div>
        </Link>
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