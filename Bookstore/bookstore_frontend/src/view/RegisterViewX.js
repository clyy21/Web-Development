import React from 'react';
// import {withRouter} from "react-router-dom";
// import MyFooter from "../components/footer"
// import RegisterForm from "../components/RegisterPage/RegisterForm.js";
import {Layout, Divider} from 'antd';
import 'antd/dist/antd.css'
import RegisterFormX from '../user/RegisterFormX.js';

const {Header, Content, Footer} = Layout;

class RegisterViewX extends React.Component {
  render() {
    return (
        <div className="register-page">
                <div className="register-container">
                    <div className="register-box">
                    <h1 className="page-title">Register</h1>

                        <div className="register-content">
                        <RegisterFormX/>
                        <a href="/login">Log In</a>
                        </div>
                    </div>
                </div>
            </div>
        
    );

  }
}

export default (RegisterViewX);