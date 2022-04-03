import React, { useState, useEffect } from "react";
import { auth, googleAuthProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { Button, Input, Form } from "antd";
import { MailOutlined, SaveOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/user_action";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      dispatch(loginUser(result.user));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleGoogleSubmit = async (e) => {
    signInWithPopup(auth, googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        dispatch(loginUser(user));
        navigate("/");
      })
      .catch((err) => toast.err(err.message));
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
