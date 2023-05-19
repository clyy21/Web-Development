import React, {useState} from 'react';
import {Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete} from 'antd';
import {register,registerCheck} from '../services/userServiceX';
import 'antd/dist/antd.css';
import '../css/signup.css'
import reqwest from 'reqwest';

const {Option} = Select;

const formItemLayout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 8},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 16},
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegisterFormX = () => {
  const [form] = Form.useForm();
  const onFinishFailed = (errorInfo) => {
    console.log('Register Failed:', errorInfo);
  };

  const handleSubmit =(values) => {
    console.log('Register Received values of form:',values);
    register(values);
  }

  let checkUser=false;
  //
  // const handleCheck=(value) => {
  //   console.log("handle check called  "+value);
  //   checkUser=value;
  // }
  //
  // const checkAccount= async (rule,value,callback) => {
  //   if(!value) {
  //     return Promise.reject("请输入您的用户名。");
  //   }
  //   let p=new Promise(function(resolve,reject) {
  //     let timer=setTimeout(function() {
  //       registerCheck(value,handleCheck);
  //       resolve();
  //     },1000);
  //   });
  //   p.then(function(){
  //     console.log("checkUser called="+checkUser);
  //     if(checkUser==true) {
  //       return Promise.reject("此用户名已被注册，请更换其他用户名。");
  //     } else {
  //       return Promise.resolve();
  //     }
  //   })
  //   // await registerCheck(value, handleCheck);
  //   // console.log("checkUser called="+checkUser);
  //   // if(checkUser==true) {
  //   //   return Promise.reject("此用户名已被注册，请更换其他用户名。");
  //   // } else {
  //   //   return Promise.resolve();
  //   // }
  // }


  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  return (
      <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          scrollToFirstError
      >

        <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                whitespace: true,
                message: 'Please insert username',
              },
              // {validator: checkAccount}
              ({getFieldValue})=>({
                validator(_,value,callback) {
                  console.log("validator called");
                  if(!value) {
                    callback("");
                  }
                  reqwest({
                    url:`http://localhost:8080/registerCheck?username=${value}`,
                    method:'get',
                    type:'json',
                  }).then(data=>{
                    console.log("get data:"+data);
                    if(data==false) {
                      console.log("yes called");
                      callback();
                    }
                    else {
                      console.log("reject called");
                     // return Promise.reject("此用户名已被注册，请更换其他用户名。");
                      callback("The username is registered, choose another username");
                    }
                  })
                  console.log("validator end");
                  return false;

                }
              }),
            ]}
            hasFeedback
        >
          <Input/>
        </Form.Item>

        <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please insert password',
              },
              ({getFieldValue}) => ({
                validator(_, value) {
                  if (value.length>=8 || !value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('Password not less than 8 characters'));
                },
              }),
            ]}
            hasFeedback
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please insert password',
              },
              ({getFieldValue}) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('Password incorrect'));
                },
              }),
            ]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please insert name',
                whitespace: true,
              },
            ]}
            hasFeedback
        >
          <Input/>
        </Form.Item>

        <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: 'email',
                message: 'Email is invalid',
              },
              {
                required: true,
                message: 'Please insert email',
              },
            ]}
            hasFeedback
        >
          <Input/>
        </Form.Item>

        <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(
                        new Error('Agree T&C')),
              },
            ]}
            {...tailFormItemLayout}
        >
          <Checkbox>
            I have read and agree with  <a href="">the T&C</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" block="true">
            Sign Up
          </Button>
        </Form.Item>
      </Form>

  );

};

export default RegisterFormX;
