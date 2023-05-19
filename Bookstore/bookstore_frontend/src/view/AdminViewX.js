import React from "react";
import { Layout } from "antd";
import SideBar from "../Components/Admin/SideBar";
import UserTableX from "../Components/Admin/UsersTableX";

class AdminViewX extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderContent = () => {
      if (this.props.match.params.id == 1) {
        return (
          <Layout className="adminview-layout">
            <SideBar selected={"1"} />
            <div className="booktable-wrapper">
              <div className="booktable-container">
                <UserTableX className="booktable-admin" />
              </div>
            </div>
          </Layout>
        );
      }
      else {
        return null;
      }
    };
    return (
      <div className="admin-page">
        {/* <HeadWrap_HomePage/> */}
        {renderContent()}
        {/* <MyFooter/> */}
      </div>
    );
  }
}

export default AdminViewX;
