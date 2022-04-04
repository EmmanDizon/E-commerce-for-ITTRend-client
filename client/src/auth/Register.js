import React from "react";
import { toast } from "react-toastify";
import { Form, Input, Button } from "antd";
import {
  FormOutlined,
  MailOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import http from "../service/http";

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const data = {
        ...values,
      };

      await http.post(
        `${process.env.REACT_APP_NODE_PORT}/users/register`,
        data
      );
      toast.success(`Registration Success !`);
      form.resetFields();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
    },
  };

  const registerForm = () => {
    return (
      <React.Fragment>
        <Form {...formItemLayout} onFinish={onFinish} form={form}>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail !",
              },
              {
                required: true,
                message: "Please input your E-mail !",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} />
          </Form.Item>

          <Form.Item
            name="name"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "• Please input your name",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "• Please enter your password",
              },
              () => ({
                validator(_, value) {
                  if (value) {
                    if (value.length >= 6) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("• Password must be 6 characters more")
                    );
                  }
                  return Promise.reject();
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Re-type Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "• Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "• The two passwords that you entered do not match !"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 18, offset: 6 }}>
            <Button
              htmlType="submit"
              type="primary"
              block
              shape="round"
              icon={<FormOutlined />}
              size="medium"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </React.Fragment>
    );
  };
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="row">
            <div>
              <h4>
                <i className="fa fa-user-plus"></i>
              </h4>
            </div>
            <div className="ml-2">
              <h4>Registration Form</h4>
            </div>
          </div>
          <h1></h1>
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
