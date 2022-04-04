import React, { useState } from "react";
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
