import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { Form, Input, Button, Card, Typography, Row, Col } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../redux/actions/user_action";
import { useNavigate } from "react-router-dom";

const { Title, Text, Link } = Typography;

const Register = () => {
  const [form] = Form.useForm();
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error]);

  const onFinish = async (values) => {
    const data = {
      ...values,
    };

    dispatch(register(data));
    alert.success("Registration complete !");
    navigate("/login");
  };

  const registerForm = () => {
    return (
      <Form name="signup" initialValues={{}} onFinish={onFinish} form={form}>
        <Title level={2} className="text-center" style={{ color: "#11425d" }}>
          CREATE ACCOUNT
        </Title>

        <Card
          style={{
            borderRadius: "20px",
          }}
        >
          <Row gutter={{ xs: 8, sm: 16 }}>
            <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
              <Form.Item
                name="firstname"
                label="First name"
                hasFeedback
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Please input your first name.",
                  },
                  {
                    min: 2,
                    message: "Your first name must be at least 2 characters.",
                  },
                ]}
              >
                <Input placeholder="First name" size="large" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
              <Form.Item
                hasFeedback
                name="lastname"
                label="Last name"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Please input your last name.",
                  },
                  {
                    min: 2,
                    message: "Your last name must be at least 2 characters.",
                  },
                ]}
              >
                <Input placeholder="Last name" size="large" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="email"
            label="Email address"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            hasFeedback
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
            <Input placeholder="Email" size="large" />
          </Form.Item>

          <Form.Item
            name="contact_no"
            label="Contact No."
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please input your mobile no.",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Row gutter={{ xs: 8, sm: 16 }}>
            <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
              <Form.Item
                name="password"
                label="Password"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please input your password.",
                  },
                  { min: 6, message: "Password must be minimum 6 characters." },
                ]}
              >
                <Input.Password placeholder="Password" size="large" />
              </Form.Item>
            </Col>

            <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
              <Form.Item
                name="confirm"
                label="Confirm Password"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Confirm your password.",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm password" size="large" />
              </Form.Item>
            </Col>
          </Row>

          <Button
            type="primary"
            loading={loading}
            className="mt-20 mb-2"
            htmlType="submit"
            shape="round"
            block
            icon={<UserAddOutlined />}
            size="large"
          >
            Sign Up
          </Button>

          <Text seccondary={"true"}>
            Already have an account? <Link href="/login">Log in</Link>{" "}
          </Text>
        </Card>
      </Form>
    );
  };
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">{registerForm()}</div>
      </div>
    </div>
  );
};

export default Register;
