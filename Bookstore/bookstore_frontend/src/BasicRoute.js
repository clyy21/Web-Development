import React from 'react'
import NavBar from './Components/NavBar'
import Home from './view/HomeView';
import BooksView from './view/BooksView';
import CartView from './view/CartView';
import OrderView from './view/OrderView';
import ProfileView from './view/ProfileView';
import BookDetailsView from './view/BookDetailsView';
import SignUp from './view/SignUpView'
import BookListView from './view/BookListView';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout, BackTop } from 'antd'
import { Link } from 'react-router-dom';
import UserAvatar from "../src/layout/UserAvatar";
import HeadInfo from "../src/layout/HeadInfo";
import AdminViewX from './view/AdminViewX';
import AddBook from './Components/Admin/AddBookX';
import AdminBookListView from './view/AdminBookListView';
import LoginViewX from './view/LoginViewX';
import RegisterViewX from './view/RegisterViewX';
import UserTableX from './Components/Admin/UsersTableX';
import AdminManageUserView from './view/AdminManageUserView';
import UserOrderView from './view/UserOrderView';
import OrderTableX from './Components/OrderTableX';
import Success from './Components/Success';
import UserOrderTable from './Components/UserOrderTable';
import BookStats from './Components/Admin/BookStats';
import UserStats from './Components/Admin/UserStats';
import AdminView from './view/AdminView';
import UserOrder from './Components/Admin/UserOrder';
const { Header, Content } = Layout;



const BasicRoute = () => {

  return (
    <>
      <BrowserRouter >
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/books" element={<BooksView />} />
          <Route path="/booklist" element={<BookListView />} />
          <Route path="/order" element={<UserOrderView isadmin={"0"}/>} />
          <Route path="/ordertable" element={<OrderView />} />
          <Route path="/success" element={<Success />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/bookDetails" element={<BookDetailsView />} />
          <Route path="/login" element={<LoginViewX />} />
          <Route path="/register" element={<RegisterViewX />} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="/admin/booklist" element={<AdminBookListView />} />
          <Route path="/admin/addbook" element={<AddBook />} />
          {/* <Route path="/admin/editbook/:id" element={<ModifyBookX/>} /> */}
          <Route exact path="/admin/:id" element={<AdminViewX/>} />
          <Route exact path="/admin/userorderlist" element={<UserOrder isadmin={"1"}/>} />
          <Route exact path="/admin/bookstat" element={<BookStats isadmin={"1"}/>} />
          <Route exact path="/admin/userstat" element={<UserStats/>} />
        <Route path="/admin/manageusers" element={<AdminManageUserView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default BasicRoute
