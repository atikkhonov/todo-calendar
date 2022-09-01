import { Button, Form, Input } from 'antd';
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { rules } from '../../../utils/rules';
import useTypedDispatch from '../../../hooks/useTypedDispatch';
import { signIn } from '../../../redux/slices/AuthSlice';
import { modalClose } from '../../../redux/slices/ModalSlice';

const LoginForm: React.FC = () => {
  const dispatch = useTypedDispatch()
  
  const successSubmit = (values: any) => {
    console.log(values);
  };
  
  const failedSubmit = (error: any) => {
    console.log('Failed:', error);
  }
  
  const onSubmitHandler = () => {
    dispatch(signIn())
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
          onClick={onSubmitHandler}
          style={{
            background: "var(--main-color)",
            border: "none",
          }}
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm