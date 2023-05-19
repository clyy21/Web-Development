import React from "react";
import { Menu, Layout, Divider, Space, Table, Switch } from "antd";
// import '../../css/AdminPage.css';
import { getAllUsers, updateUserStatus } from "../../services/userServiceX";

const { Header, Content, Footer, Sider } = Layout;

class UserTableX extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
    };
  }

  handleUsers = (data) => {
    this.setState({
      users: data,
    });
  };

  handleChange = (checked, userId) => {
    console.log("UserTable handleChange:" + checked + " " + userId);
    updateUserStatus(userId, checked);
    // this.handleUsers();
  };
  handleChange1 = (checked) => {
    console.log("switch to " + checked);
    // this.handleUsers();
  };

  componentDidMount() {
    getAllUsers(this.handleUsers);
  }

  render() {
    const columns = [
      {
        title: "User ID",
        dataIndex: "userId",
        key: "userId",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Action",
        dataIndex: "enabled",
        key: "enabled",
        render: (text, record) => (
          <Space size="middle">
            <Switch
              checkedChildren="Active"
              unCheckedChildren="Banned"
              defaultChecked={record.enabled}
              onChange={(checked) => this.handleChange(checked, record.userId)}
            />
          </Space>
        ),
      },
    ];
    return (
      <div className="userorder-table">
        <Table columns={columns} dataSource={this.state.users} />
      </div>
    );
  }
}

export default UserTableX;
