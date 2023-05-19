import { Layout } from "antd";
import React from "react";
import SideBar from "../Components/Admin/SideBar";
import UserTableX from "../Components/Admin/UsersTableX";
import Navbar from "../Components/NavBar";
import "../css/userorder.css"

const AdminManageUserView = () => {
  return (
    <>
      <Navbar />
    <div className="container blankspacetop2">
      <div className="userorder-container">
        <Layout className="adminview-layout">
          <SideBar selected={"2"} />
          <div className="booktable-wrapper">
            <div className="booktable-container">
              <UserTableX />
            </div>
          </div>
        </Layout>
      </div>
    </div>
    </>
  );
};

export default AdminManageUserView;
