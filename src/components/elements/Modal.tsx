import { Modal } from 'antd';
import React from 'react'
import useTypedDispatch from '../../hooks/useTypedDispatch';
import useTypedSelector from '../../hooks/useTypedSelector';

import { modalClose } from '../../redux/slices/ModalSlice';
import LoginForm from '../UI/LoginForm';

const MyModal = () => {
  const dispatch = useTypedDispatch()
  const { isOpen } = useTypedSelector(state => state.modalReducer)

  const handleCancel = () => {
    dispatch(modalClose())
  };
  
  return (
    <>
      <Modal
        visible={isOpen}
        onCancel={handleCancel} 
        footer={null}
      >
        <h1>Sign in</h1>
        <LoginForm/>
      </Modal>
    </>
  )
}

export default MyModal