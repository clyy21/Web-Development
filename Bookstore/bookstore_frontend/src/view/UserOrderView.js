import React, { useEffect, useState } from "react";
import Navbar from "../Components/NavBar";
import UserOrderTable from "../Components/UserOrderTable";
import "../css/userorder.css";

const UserOrderView = (props) => {
  const [option, setOption] = useState(0);

  console.log("check admin", props.isadmin);
  
  useEffect(() => {
    if (props.isadmin === 1) {
      setOption(1);
    }
  });

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="userorder-container topblankspace">
          <UserOrderTable isadmin={option}/>
        </div>
      </div>
    </div>
  );
};

export default UserOrderView;
