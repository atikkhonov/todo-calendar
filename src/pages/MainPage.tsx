import React from 'react'
import Information from '../components/elements/Information/Information'

import data from '../data'

import Button from '../components/UI/Button/Button'

const MainPage = () => {
  
  return (
    <>
      <Button callback={() => console.log("123")}>
        <div>123</div>
      </Button>
      <Button callback={() => console.log("123")}>
        <div>123</div>
      </Button>
      <Information movie={data[0]}/>
    </>
  )
}

export default MainPage