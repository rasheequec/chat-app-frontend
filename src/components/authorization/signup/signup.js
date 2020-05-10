import React from 'react'
import './signup.css'
import { Form, Input, Button, Checkbox } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { registerRequest } from '../../../actions/registerAction'


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

const Signup = (props) => {

  const onFinish = values => {
    props.registerRequest(values)
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div id="login">
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
        <h1 className="head">Signup</h1>
        <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <p onClick={() => props.history.push("login")}>Already signup? Login here</p>
    </Form>
    </div>
  );
};
const mapDispatchToProps = {
  registerRequest
 };
 
 export default connect(null, mapDispatchToProps)(withRouter(Signup));