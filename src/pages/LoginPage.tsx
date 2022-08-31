import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import LoginForm from '../components/UI/LogInForm/LoginForm'

const LoginPage: React.FC = () => {
  const location: any = useLocation()
  const navigate = useNavigate()
  
  const fromPage = location.state?.from?.pathName || '/login'
  
  return (
    <>
      <LoginForm/> 
    </>
  )
}

export default LoginPage