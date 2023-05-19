import React from "react";
import { BookManageTableV } from "../Components/Admin/BookManageTableV";
import BookTableX from "../Components/BookTable/BookTableX";
import Navbar from "../Components/NavBar";
import "../css/AdminPage.css";
import { Layout } from "antd";
import SideBar from "../Components/Admin/SideBar";

const AdminBookListView = () => {
  return (
    <div className="container blankspacetop2">
      <Navbar />
      <Layout className="adminview-layout">
        <SideBar selected={"1"} />
        <div className="booktable-wrapper">
          <div className="booktable-container">
            <BookManageTableV className="booktable-admin" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AdminBookListView;
