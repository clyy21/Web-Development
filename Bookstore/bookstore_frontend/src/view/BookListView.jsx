import React from 'react'
import BookTableX from '../Components/BookTable/BookTableX'
import Navbar from '../Components/NavBar'

const BookListView = () => {
  return (
    <div className='container blankspacetop2'>
      <Navbar/>
      <BookTableX />
    </div>
  )
}

export default BookListView
