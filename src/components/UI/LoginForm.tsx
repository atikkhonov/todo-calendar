import { Button, Form, Input } from 'antd';
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { rules } from '../../utils/rules';
import useTypedDispatch from '../../hooks/useTypedDispatch';
import { modalClose } from '../../redux/slices/ModalSlice';
import axios from 'axios';
import { login } from '../../redux/slices/AuthSlice';
import { IUser } from '../../models/IUser';

const LoginForm: React.FC = () => {
  const dispatch = useTypedDispatch()
  
  
  const successSubmit = async (values: any) => {
    const responce = await axios.get<IUser[]>(`./users.json`)
    const mockUser = responce.data.find((item: IUser) => item.username === values.username && item.password === values.password)
    if (mockUser) {
      dispatch(login(mockUser))
      dispatch(modalClose())
    } else {
      return
    }
  }
  
  const failedSubmit = (error: any) => {
    console.log('Failed:', error);
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
      onFinishFailed={failedSubmit}
    >
      <Form.Item
        name="username"
        rules={[rules.required("Please input your Username !")]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[rules.required("Please input your Password !")]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button 
          htmlType="submit" 
          className="login-form-button" 
          type="primary" 
          onSubmit={onSubmitHandler}
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