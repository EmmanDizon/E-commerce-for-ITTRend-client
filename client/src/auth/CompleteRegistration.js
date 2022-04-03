import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

const CompleteRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    originalPassword: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password.originalPassword) {
      toast.error("Password is required.");
    } else if (password.originalPassword < 6) {
      toast.error("Password must be at least 6 characters long.");
    } else if (password.originalPassword !== password.confirmPassword) {
      toast.error("Passwords don't match.");
    } else {
      try {
        const result = await auth.signInWithEmailLink(
          email,
          window.location.href
        );

        if (result.user.emailVerified) {
          window.localStorage.removeItem("emailForRegistration");
          let user = auth.currentUser;

          await user.updatePassword(password);

          const idTokenResult = await user.getIdTokenResult();

          navigate("/home");
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const onChange = ({ target: input }) => {
    const data = { ...password };
    data[input.name] = input.value;

    setPassword(data);
  };

  const completeRegistration = () => {
    return (
      <Form>
        <Input value={email} disabled />

        <Input.Password
          placeholder="Password"
          name="originalPassword"
          className="mt-2"
          prefix={<LockOutlined />}
          value={password.originalPassword}
          onChange={onChange}
          autoFocus
        />
        <Input.Password
          placeholder="Re-type password"
          name="confirmPassword"
          className="mt-2"
          prefix={<LockOutlined />}
          value={password.confirmPassword}
          onChange={onChange}
          autoFocus
        />

        <Button
          onClick={handleSubmit}
          type="primary"
          className="mt-2"
          block
          shape="round"
          icon={<MailOutlined />}
          size="large"
        >
          Proceed
        </Button>
      </Form>
    );
  };
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Complete your Registration </h4>

          {completeRegistration()}
        </div>
      </div>
    </div>
  );
};

export default CompleteRegistration;
