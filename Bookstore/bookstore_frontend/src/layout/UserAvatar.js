import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { logout, getUser } from "../services/userServiceX";
import "../index.css";

export class UserAvatar extends React.Component {
  handleLogout = () => {
    // console.log('Received values of form:',values);
    logout();
    //  window.location.reload();
  };
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a onClick={this.handleLogout}>Log Out</a>
        </Menu.Item>
      </Menu>
    );
    const { user } = this.props;
    return (
      // <Link to='/'>
      <div id="avatar">
        <Dropdown overlay={menu} placement="bottomRight">
          <span className="ant-layout-header"> Hi, {user.username}</span>
        </Dropdown>
      </div>
      // </Link>
    );
  }
}

export default UserAvatar;
