import React, { useState } from "react";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { MailOutlined, SaveOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { Button, Input, Form } from "antd";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT_URL);
    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT_URL,
      handleCodeInApp: true,
    };

    try {
      await sendPasswordResetEmail(auth, user.email, config);

      toast.success("Check your email for password reset link ");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onChange = ({ target: input }) => {
    const data = { ...user };
    data[input.name] = input.value;

    setUser(data);
  };

  return (
    <div className="container col-md-6 offset-md-3 p-5">
      <h4>Forgot Password</h4>
      <Form>
        <Input
          type="email"
          name="email"
          prefix={<MailOutlined />}
          placeholder="Email"
          value={user.email}
          onChange={onChange}
          size="large"
          autoFocus
        />

        <Button
          onClick={handleSubmit}
          type="primary"
          className="mt-2"
          block
          shape="round"
          icon={<SaveOutlined />}
          size="large"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPassword;
