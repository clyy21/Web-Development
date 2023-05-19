import React from 'react'
import { BookListtc } from '../Components/BookList-tc'
import Slide from '../Components/Home/Slide'
import Navbar from '../Components/NavBar'
import Title from '../Components/Title'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slide />
      <Title name="Recommended Books" />
      {/* <Book /> */}
      <div className='container'>
        <BookListtc />
      </div>
    </div>
  )
}

export default Home
