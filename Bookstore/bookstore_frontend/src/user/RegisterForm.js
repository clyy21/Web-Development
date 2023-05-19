import React from 'react';
// import {
//     Card,
//     Row,
//     Col,
//     Form,
//     Input,
//     Checkbox,
//     Button,
//     Radio,
//     DatePicker,
//     Select
// } from 'antd';
// import {Controller} from "react-hook-form";
// import {UserOutlined, LockOutlined, MailOutlined, HomeOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
// import * as userService from "../services/userService";
// import {Link} from "react-router-dom";
// import "../css/register.css"


// const {Option} = Select;

class RegisterForm extends React.Component {

//     onFinish = values => {
//         console.log('Received values of form: ', values);
//         userService.register(values);
//     };

//     render() {
//         return (

//             <div>
//                         <Card title="Sign up">
//                             <Form
//                                 onFinish={this.onFinish} className="register-form" layout="inline" scrollToFirstError>
//                                 <Form.Item label="User Type"
//                                            className="register-form-button"
//                                            name="usertype"
//                                            rules={[
//                                                {
//                                                    required: true,
//                                                    message: 'Please choose your user type!',
//                                                },
//                                            ]}
//                                 >
//                                     <Select
//                                         // onChange={(value) => {
//                                         //     alert(value)
//                                         // }}
//                                         name="用户类型"
//                                         placeholder="Admin/Customer">
//                                         <Option value="1">Admin</Option>
//                                         <Option value="2">Customer</Option>
//                                     </Select>
//                                 </Form.Item>

//                                 <Form.Item
//                                     className="register-form-button"
//                                     name="username"
//                                     rules={[
//                                         {
//                                             required: true,
//                                             message: 'Please input your username!',
//                                         },
//                                     ]}
//                                 >
//                                     <Input prefix={<UserOutlined className="site-form-item-icon"/>}
//                                            placeholder="Username"/>
//                                 </Form.Item>
                                
//                                 {/* <Form.Item
//                                     className="register-form-button"
//                                     name="firstname"
//                                     rules={[
//                                         {
//                                             required: true,
//                                             message: 'Please input your First Name!',
//                                         },
//                                     ]}
//                                 >
//                                     <Input prefix={<UserOutlined className="site-form-item-icon"/>}
//                                            placeholder="firstname"/>
//                                 </Form.Item> */}

//                                 {/* <Form.Item
//                                     className="register-form-button"
//                                     name="lastname"
//                                     rules={[
//                                         {
//                                             required: true,
//                                             message: 'Please input your Last Name!',
//                                         },
//                                     ]}
//                                 >
//                                     <Input prefix={<UserOutlined className="site-form-item-icon"/>}
//                                            placeholder="lastname"/>
//                                 </Form.Item> */}
//                                 <Form.Item
//                                     className="register-form-button"
//                                     name="email"
//                                     rules={[
//                                         {
//                                             type: 'email',
//                                             message: 'The input is not valid E-mail!',
//                                         },
//                                         {
//                                             required: true,
//                                             message: 'Please input your E-mail!',
//                                         },
//                                     ]}
//                                 >
//                                     <Input
//                                         prefix={<MailOutlined className="site-form-item-icon"/>}
//                                         type="email"
//                                         placeholder="email"
//                                     />
//                                 </Form.Item>


//                                 {/* <Form.Item
//                                     className="register-form-button"
//                                     name="contact_no"
//                                     rules={[
//                                         {
//                                             type: 'contact_no',
//                                             message: 'The input is not valid Contact No!',
//                                         },
//                                         {
//                                             required: true,
//                                             message: 'Please input your Contact No!',
//                                         },
//                                     ]}
//                                 >
//                                     <Input
//                                         prefix={<MailOutlined className="site-form-item-icon"/>}
//                                         type="contact_no"
//                                         placeholder="contact_no"
//                                     />
//                                 </Form.Item> */}
// {/* 
//                                 <Form.Item
//                                     className="register-form-button"
//                                     name="address"
//                                     rules={[
//                                         {
//                                             type: 'address',
//                                             message: 'The input is not valid Address!',
//                                         },
//                                         {
//                                             required: true,
//                                             message: 'Please input your Address!',
//                                         },
//                                     ]}
//                                 >
//                                     <Input
//                                         prefix={<MailOutlined className="site-form-item-icon"/>}
//                                         type="address"
//                                         placeholder="address"
//                                     />
//                                 </Form.Item> */}

//                                 {/* <Form.Item
//                                     className="register-form-button"
//                                     name="gender">
//                                     <Radio.Group>
//                                         <Radio value="male">Male</Radio>
//                                         <Radio value="female">Female</Radio>
//                                         <Radio value="other">Other</Radio>
//                                     </Radio.Group>
//                                     <Input
//                                         prefix={<MailOutlined className="site-form-item-icon"/>}
//                                         type="gender"
//                                         placeholder="gender: Male/Female/Other"
//                                     />
//                                 </Form.Item> */}

//                                 <Form.Item
//                                     className="register-form-button"
//                                     name="password"
//                                     rules={[
//                                         {
//                                             required: true,
//                                             message: 'Please input your password!',
//                                         },
//                                     ]}
//                                     hasFeedback
//                                 >
//                                     <Input.Password
//                                         prefix={<LockOutlined className="site-form-item-icon"/>}
//                                         type="password"
//                                         placeholder="Password"
//                                     />
//                                 </Form.Item>
//                                 <Form.Item
//                                     className="register-form-button"
//                                     name="confirm"
//                                     dependencies={['password']}
//                                     hasFeedback
//                                     rules={[
//                                         {
//                                             required: true,
//                                             message: 'Please confirm your password!',
//                                         },
//                                         ({getFieldValue}) => ({
//                                             validator(rule, value) {
//                                                 if (!value || getFieldValue('password') === value) {
//                                                     return Promise.resolve();
//                                                 }
//                                                 return Promise.reject('The two passwords that you entered do not match!');
//                                             },
//                                         }),
//                                     ]}
//                                 >
//                                     <Input.Password
//                                         prefix={<LockOutlined className="site-form-item-icon"/>}
//                                         type="password"
//                                         placeholder="Password again"
//                                     />
//                                 </Form.Item>

//                                 {/* <Form.Item
//                                     name="dob"
//                                     label="Date of birth"
//                                     rules={[{ required: true, message: 'Please fill Date of birth' }]}
//                                 >
//                                     <DatePicker
//                                         format={'DD/MM/YYYY'}
//                                         placeholder="Date of birth"
//                                         style={{ width: '100%' }}
//                                     />
//                                 </Form.Item> */}


//                                 {/*-------------------------------------------------------------------------------------*/}
//                                 <Form.Item className="register-form-button">
//                                     <Button type="primary" htmlType="submit" className="register-form-button">
//                                         Register
//                                     </Button>
//                                     Or <Link to="/login">Log in</Link>
//                                 </Form.Item>
//                             </Form>
//                         </Card>
//                     {/* </Col> */}
//                 {/* </Row> */}
//             </div>

//         );
//     }
}

export default RegisterForm
