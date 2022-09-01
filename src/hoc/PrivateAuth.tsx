import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import useTypedSelector from '../hooks/useTypedSelector'

interface PrivateAuthProps {
  children: any
}

const PrivateAuth: React.FC<PrivateAuthProps> = ({ children }) => {
  const isAuth = useTypedSelector(state => state.authReducer.isAuth)
  const location = useLocation();

  return (
    isAuth
      ? children
      : <Navigate to='/public' state={{ from: location }}/>
  )
}

export default PrivateAuth