import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import useTypedSelector from '../hooks/useTypedSelector'

interface PrivateAuthProps {
  children: React.ReactElement
}

const PrivateAuth: React.FC<PrivateAuthProps> = ({ children }) => {
  const isAuth = useTypedSelector(state => state.authReducer.isAuth)
  const location = useLocation();

  return (
    !isAuth
      ? <Navigate to='/main' state={{ from: location }}/>
      : children
  )
}

export default PrivateAuth