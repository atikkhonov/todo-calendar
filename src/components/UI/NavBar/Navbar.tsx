import { Menu, Row } from 'antd'
import React from 'react'

const Navbar: React.FC = () => {
  return (
    <Row justify='end'>
      <Menu 
        selectable={false}
      >
        <Menu.Item key={1}> LogIn </Menu.Item>
      </Menu>
    </Row>
  )
}

export default Navbar