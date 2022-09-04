import { Modal } from 'antd';
import React from 'react'
import useTypedDispatch from '../../hooks/useTypedDispatch';
import useTypedSelector from '../../hooks/useTypedSelector';

import { modalFormClose } from '../../redux/slices/ModalSlice';

interface MyModalProps {
  children: React.ReactNode;
}

const MyModal: React.FC<MyModalProps> = ({ children }) => {
  const dispatch = useTypedDispatch()
  const { isOpenForm } = useTypedSelector(state => state.modalReducer)

  const handleCancel = () => {
    dispatch(modalFormClose())
  };
  
  return (
    <>
      <Modal
        visible={isOpenForm}
        onCancel={handleCancel} 
        footer={null}
      >
        {children}
      </Modal>
    </>
  )
}

export default MyModal