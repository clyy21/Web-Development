import React from 'react'
import BookStats from '../Components/Admin/BookStats'
import Navbar from '../Components/NavBar'
import Profile from '../Components/Profile'
import Title from '../Components/Title'
import UserBookStats from '../Components/UserBookStats'

const ProfileView = () => {
  return (
    <>
    <Navbar/>
   {/* <Profile/> */}
   <UserBookStats isadmin={"0"}/>
   </>
  )
}

export default ProfileView
