import React, { useState } from "react";
import { auth } from "../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { Input, Button } from "antd";
import { FormOutlined, MailOutlined } from "@ant-design/icons";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, config);

      window.localStorage.setItem("emailForRegistration", email);

      toast.success(
        `Email is sent to ${email}. Click the link to complete your registration.`
      );

      setEmail("");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onChange = ({ target: input }) => {
    setEmail(input.value);
  };

  const registerForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <Input
          prefix={<MailOutlined />}
          placeholder="Email"
          value={email}
          onChange={onChange}
          autoFocus
        />

        <Button
          onClick={handleSubmit}
          type="primary"
          className="mt-2"
          block
          shape="round"
          icon={<FormOutlined />}
          size="medium"
        >
          Register
        </Button>
      </form>
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
