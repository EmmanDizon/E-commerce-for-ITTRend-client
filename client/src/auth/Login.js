import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { Button, Input, Form, Card, Image, Space, Typography } from "antd";
import { LoginOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearErrors } from "../redux/actions/user_action";
import { useNavigate } from "react-router-dom";

import logo from "../assets/images/logo.png";

const { Text, Link } = Typography;

const Login = function () {
  const [form] = Form.useForm();

  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error]);

  const onFinish = (values) => {
    const user = {
      ...values,
    };

    dispatch(loginUser(user));
  };

  const LoginForm = () => {
    return (
      <>
        <Form name="signup" initialValues={{}} onFinish={onFinish} form={form}>
          <Card
            style={{
              borderRadius: "20px",
            }}
          >
            <Space
              direction="horizontal"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <Image src={logo} height={150} />
            </Space>

            <Form.Item
              name="email"
              hasFeedback
              label="Email address"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your email.",
                },
                {
                  type: "email",
                  message: "Your email is invalid.",
                },
              ]}
            >
              <Input
                placeholder="Email"
                size="large"
                prefix={<MailOutlined />}
              />
            </Form.Item>

            <Form.Item
              name="password"
              hasFeedback
              label="Password"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your password.",
                },
                { min: 6, message: "Password must be minimum 6 characters." },
              ]}
            >
              <Input.Password
                placeholder="Password"
                size="large"
                prefix={<LockOutlined />}
              />
            </Form.Item>

            <Button
              type="primary"
              loading={loading}
              block
              className="mb-2"
              htmlType="submit"
              shape="round"
              icon={<LoginOutlined />}
              size="large"
            >
              Sign In
            </Button>

            <Text seccondary={"true"}>
              Don't have an account? <Link href="/register">Register</Link>
            </Text>

            <Link
              href="/forgot/password"
              className="text-danger float-right mb-2"
            >
              Forgot Password
            </Link>
          </Card>
        </Form>
      </>
    );
  };
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="d-flex justify-content-center align-items-center"></div>
          {LoginForm()}
        </div>
      </div>
    </div>
  );
};

export default Login;
