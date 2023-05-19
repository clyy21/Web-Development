import React from 'react'
import { BookListtc } from '../Components/BookList-tc'
import Navbar from '../Components/NavBar'
import Title from '../Components/Title'
// import BookListTable from '../Components/BookList/BookListTable'

const BooksView = () => {
  return (
    <div className='container blankspacetop'>
      <Title name="Books"/>
      {/* <Book /> */}
      {/* <BookListTable /> */}
      <Navbar/>
      <BookListtc />
    </div>
  )
}

export default BooksView
