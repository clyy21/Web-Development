import React, { useContext, useState, useEffect, useRef } from 'react';
import {
  Input,
  Button,
  Form,
} from 'antd';
import "../../css/AdminPage.css";
import {addBook} from "../../services/bookService";
const EditableContext = React.createContext(null);

const { TextArea } = Input;

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

const AddBook = () => {
  const [form] = Form.useForm();
  const onFinishFailed = (errorInfo) => {
    console.log('AddBook Failed:', errorInfo);
  };

  const handleSubmit =(values) => {
    console.log('AddBook Received values of form:',values);
    addBook(values);
    window.location.href = "/admin/booklist";
  }

  return (
      <div className='container blankspacetop'>
        <h3 style={{marginLeft:50}}>Add Book</h3>
        <div className="addbook-container">
      <Form
          {...formItemLayout}
          form={form}
          name="addbook"
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          scrollToFirstError
          className="addbook-form"
      >

        <Form.Item
            name="name"
            label="Book Title"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please insert book title',
                whitespace: true,
              },
            ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
            name="author"
            label="Author"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please insert author',
              },
            ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
            name="price"
            label="Price"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                pattern: new RegExp(/^(([1-9]\d*)|\d)(\.\d{1,2})?$/, 'g'),
                message: 'Please insert ptice(Max 2d.p.)',
              },
            ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
            name="isbn"
            label="ISBN"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please insert ISBN (13 digits)',
                whitespace: true,
                pattern:new RegExp(/\d{13}$/,'g'),
              },
            ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
            name="inventory"
            label="Stock"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please insert stock',
                whitespace: true,
                pattern:new RegExp(/^[1-9]\d*$/,'g'),
              },
            ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
            name="description"
            label="Description"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please insert description',
                whitespace: true,
              },
            ]}
        >
          <TextArea/>
        </Form.Item>
        <Form.Item
            name="image"
            label="Image"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please insert image',
                pattern:new RegExp(
                    "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|localhost|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$"),
                whitespace: true,
              },
            ]}
        >
          <TextArea/>
        </Form.Item>

        <Form.Item
            name="type"
            label="Book Type"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please insert book type',
               whitespace: true,
              },
            ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
            name="brief"
            label="Brief"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please brief about the book',
                whitespace: true,
              },
            ]}
        >
          <TextArea/>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" block="true">
            Add Book
          </Button>
        </Form.Item>
      </Form>
        </div>
      </div>

  );

};

export default AddBook;