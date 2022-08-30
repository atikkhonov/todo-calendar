import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import LoginWrapper from '../components/elements/LoginWrapper/LoginWrapper'
import LoginForm from '../components/UI/LoginForm/LoginForm'

const LoginPage: React.FC = () => {
  const location: any = useLocation()
  const navigate = useNavigate()
  
  const fromPage = location.state?.from?.pathName || '/login'
  
  return (
    <LoginWrapper>
      <LoginForm />
    </LoginWrapper>
  )
}

export default LoginPage