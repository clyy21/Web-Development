import { Button } from 'antd'
import React from 'react'
import Navbar from '../Components/NavBar'
import OrderTableX from '../Components/OrderTableX';
import "../css/myorder.css";
import { submitCart } from '../services/cartService';


const OrderView = () => {

  
  const handleSubmit =() => {
    console.log("handleSubmit Order");
    submitCart();
    window.location.href="/success";

  }

  return (
    <>
    <Navbar/>
      {/* <Order /> */}
      <div className="ordercontent-container">
        <div className="topblankspace order-title">Payment</div>
                  <OrderTableX/>
                  <div className="cartfoot-container" style={{marginBottom: 16}}>
                    <Button type="primary" className="orderbutton-container"
                            onClick={handleSubmit}
                    >
                      Make Payment
                    </Button>
                  </div>
            </div>
      </>
  )
}

export default OrderView
