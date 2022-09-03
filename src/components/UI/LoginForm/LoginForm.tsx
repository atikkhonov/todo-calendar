import { Button, Form, Input } from 'antd';
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { rules } from '../../../utils/rules';
import useTypedDispatch from '../../../hooks/useTypedDispatch';
import { modalClose } from '../../../redux/slices/ModalSlice';
import { AuthActionCreator } from '../../../redux/actionCreators/AuthActionCreator';
import { IUser } from '../../../models/IUser';
import useTypedSelector from '../../../hooks/useTypedSelector';
import styles from './LoginForm.module.scss'
import { useNavigate } from 'react-router-dom';


const LoginForm: React.FC = () => {
  const dispatch = useTypedDispatch()
  const { isLoading, error } = useTypedSelector(state => state.authReducer)
  
  const navigate = useNavigate()
  
  const [username, setUsername] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  
  const successSubmit = async (values: IUser) => {
    dispatch(AuthActionCreator.login(values, navigate))
  }

  const onSubmitHandler = () => {
    dispatch(modalClose())
  }
  
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={successSubmit}
    >
      { error && <h2 className={styles.warning}>{error}</h2> }
      <Form.Item
        name="username"
        rules={[rules.required("Please input your Username !")]}
      >
        <Input 
          prefix={<UserOutlined className="site-form-item-icon" />} 
          placeholder="Username" 
          value={username} 
          onChange={e => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[rules.required("Please input your Password !")]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button 
          htmlType="submit" 
          className="login-form-button" 
          type="primary" 
          onSubmit={onSubmitHandler}
          loading={isLoading}
          style={{
            background: "var(--main-color)",
            border: "none",
          }}
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm