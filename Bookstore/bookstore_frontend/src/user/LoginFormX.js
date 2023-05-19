import React from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import 'antd/dist/antd.css';
import '../css/login.css'
import { login } from '../services/userServiceX';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class LoginFormX extends React.Component {

  onFinishFailed = (errorInfo) => {
    console.log('Login Failed:', errorInfo);
  };

  handleSubmit =(values) => {
    console.log('Login Received values of form:',values);
    login(values);
  }

  render() {
    return (
        <Form   {...layout}
                name="basic"
                initialValues={{remember: true}}
                onFinish={this.handleSubmit}
             //   onFinishFailed={this.onFinishFailed}
        >
          <div className="LoginInput" align="center">
            <Form.Item
                label="Username"
                name="username"
                rules={[{required: true, message: 'Please insert username'}]}
            >
              <Input/>
            </Form.Item>
          </div>

          <div className="LoginInput" align="center">
            <Form.Item
                label="Password"
                name="userPassword"
                rules={[{required: true, message: 'Please insert password'}]}
            >
              <Input.Password/>
            </Form.Item>
          </div>

          <div className="LoginRemember" align="center">
            <Form.Item
                {...tailLayout}
                name="remember"
                valuePropName="checked"
            >
              <Checkbox>
                Remember me
              </Checkbox>
            </Form.Item>
          </div>


          <div className="LoginSubmit" align="center">
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" className="SubmitButton"
                      style={{right: 43}}>
                Login
              </Button>
            </Form.Item>
          </div>
        </Form>

    );
  };

};

export default LoginFormX;
