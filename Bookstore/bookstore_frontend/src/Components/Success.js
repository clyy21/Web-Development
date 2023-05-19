import { CheckCircleFilled } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import Navbar from './NavBar'
import "../css/success.css"

const Success = () => {
  return (
    <div className='mt-4'>
        <Navbar/>
        <div className="success-container">
            {/* <CheckCircleFilled style={{fontSize: 70, color: "#47A4FA"}}/> */}
            <div className="success-font">
              Payment Done!
            </div>
            <Button size={"large"} onClick={() => {
              window.location.href = "./"
            }}>Back to Home</Button>
          </div>
    </div>
  )
}

export default Success