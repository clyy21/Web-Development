import React from 'react';
// import LoginForm from '../components/LoginPage/LoginForm.js'
import {withRouter} from 'react-router-dom';
import {Layout} from 'antd';
// import MyFooter from "../components/footer.js";
import "../css/login.css";
import LoginFormX from '../user/LoginFormX.js';

const {Header, Content, Footer} = Layout;

class LoginViewX extends React.Component {
  render() {
    return (
        <div className="login-page">
        <div className="login-container">
            <div className="login-box">
                <h1 className="page-title">Login</h1>
                <div className="login-content">
                <LoginFormX/>
                <a className="register-click" href="/register">Sign up now!</a>
                </div>
            </div>
        </div>
    </div>
       
    )
  }
}

// export default withRouter(LoginViewX);
export default (LoginViewX);