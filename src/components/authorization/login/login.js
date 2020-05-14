import React from 'react'
import './login.css'
import { Form, Input, Button, Checkbox } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { loginRequest } from '../../../actions/loginAction'

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

const Login = (props) => {

  const onFinish = values => {
    props.loginRequest({email: values.email, password: values.password})
    console.log('Success:', values);
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
        <h1 className="head">Login</h1>
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

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <p onClick = {()=>props.history.push("signup")}>New user? Sign up here</p>
    </Form>
    </div>
  );
};

const mapDispatchToProps = {
  loginRequest
 };
 
 export default connect(null, mapDispatchToProps)(withRouter(Login))