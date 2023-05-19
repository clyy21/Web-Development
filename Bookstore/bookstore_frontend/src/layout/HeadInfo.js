import React from 'react';
import {Row, Col} from 'antd';
import {Link} from "react-router-dom";
import UserAvatar from "../layout/UserAvatar";
import {UserOutlined} from "@ant-design/icons";
// import '../index.css'

export class HeadInfo extends React.Component {

    render() {
        console.log("avatar");
        const user = JSON.parse(localStorage.getItem("user"));

        return (
            <div id="header">
                <div id="header-content">
                    <Row>
                        <Col span={100}>
                            {user != null ?
                                <UserAvatar user={user}/>
                                :
                                <Link to={'/login'}>
                                    <UserOutlined/> Log in
                                </Link>
                                }
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default HeadInfo
