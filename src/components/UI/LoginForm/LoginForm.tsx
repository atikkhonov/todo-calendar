import React from 'react'
import useTypedDispatch from '../../../hooks/useTypedDispatch'
import { signIn } from '../../../redux/slices/AuthSlice'

import styles from './LoginForm.module.scss'

interface LoginFormProps {
}

const LoginForm: React.FC<LoginFormProps> = ({  }) => {
  const dispatch = useTypedDispatch()
  
  const [ login, setLogin ] = React.useState<string>('')
  const [ password, setPassword ] = React.useState<string>('')
  const [ loginDirty, setLoginDirty ] = React.useState<boolean>(false)
  const [ passwordDirty, setPasswordDirty ] = React.useState<boolean>(false)
  const [ loginError, setLoginError ] = React.useState<string>('Введите логин!')
  const [ passwordError, setPasswordError ] = React.useState<string>('Введите пароль!')
  const [ formValid, setFormValid ] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (loginError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [loginError, passwordError])
  
  const loginHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
    if (e.target.value.length <= 6) {
      setLoginError("Неккоректный логин")
    } else {
      setLoginError("")
    }
  }

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    if (e.target.value.length <= 6 || e.target.value.length > 13) {
      setPasswordError("Неккоректный пароль")
      if (!e.target.value) {
        setPasswordError("Введите пароль!")
      }
    } else {
      setPasswordError("")
    }
  }
  
  
  const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    switch (e.target.name) {
      case 'login':
        setLoginDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  }
  
  return (
    <form className={styles.form}>
      <h1>Authorization</h1>
      <div className={styles.inputs}>
        {(loginDirty && loginError) ? <div className={styles.error}>{loginError}</div> : <div className={styles.error}>&nbsp;</div>}
        <input 
          onBlur={e => blurHandler(e)} 
          name="login" 
          type="text" 
          placeholder="Enter your login . . ."
          value={login}
          onChange={e => loginHandler(e)}
        />
        {(passwordDirty && passwordError) ? <div className={styles.error}>{passwordError}</div> : <div className={styles.error}>&nbsp;</div>}
        <input 
          onBlur={e => blurHandler(e)} 
          name="password" 
          type="password" 
          placeholder="Enter your password . . ." 
          value={password}
          onChange={e => passwordHandler(e)}
        />
      </div>
      <button onClick={() => console.log('123')} className={styles.button} disabled={!formValid} type="submit">Sign In</button> 
    </form>
  )
}

export default LoginForm