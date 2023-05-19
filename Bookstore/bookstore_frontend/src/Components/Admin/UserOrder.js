import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import "../../css/userorder.css"
import Navbar from "../NavBar";
import UserOrderTable from "../UserOrderTable";
import SideBar from "./SideBar";

const UserOrder = (props) => {
  const [option, setOption] = useState(0);

  console.log("check admin", props.isadmin);
  
  useEffect(() => {
    if (props.isadmin === "1") {
      setOption(1);
    }
    console.log("check", option)
  });

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="userorder-container topblankspace">
        <Layout className="adminview-layout">
        <SideBar selected={"3"} />
        <div className="booktable-wrapper">
          <div className="booktable-container">
          <UserOrderTable isadmin={option}/>
          </div>
        </div>
      </Layout>
        </div>
      </div>
    </div>
  );
};

export default UserOrder;
