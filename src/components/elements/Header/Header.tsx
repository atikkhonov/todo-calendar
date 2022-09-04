import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import useTypedDispatch from '../../../hooks/useTypedDispatch'
import useTypedSelector from '../../../hooks/useTypedSelector'
import { AuthActionCreator } from '../../../redux/actionCreators/AuthActionCreator'
import { modalFormOpen } from '../../../redux/slices/ModalSlice'
import Button from '../../UI/Button/Button'
import Navigation from '../../UI/Navigation/Navigation'

import styles from './Header.module.scss' 

const Header: React.FC = () => {
  const { isAuth, user } = useTypedSelector(state => state.authReducer)
  const dispatch = useTypedDispatch()
  const navigate = useNavigate()
  
  const onClickSignInHandler = () => {
    dispatch(modalFormOpen())
  }

  const onClickSignOutHandler = () => {
    dispatch(AuthActionCreator.logout())
    navigate('/')
  }
  
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link to="/">
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
      {
        isAuth && <Navigation/>
      }
    </>
  )
}

export default Header