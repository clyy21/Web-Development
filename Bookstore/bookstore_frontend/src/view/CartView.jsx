import React from 'react'
import CartTableX from '../Components/CartTableX'
import Navbar from '../Components/NavBar'
import Title from '../Components/Title'

const CartView = () => {
  return (
    <div className='container blankspacetop2'>
    <Navbar/>
      {/* <Cart /> */}
      <CartTableX/>
      </div>
  )
}

export default CartView
