import React, { useState } from "react";
import { auth, googleAuthProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { Button, Input, Form } from "antd";
import { MailOutlined, GoogleOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/user_action";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
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

  const LoginForm = () => {
    return (
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

        <Input.Password
          name="password"
          password="password"
          prefix={<LockOutlined />}
          placeholder="Password"
          className="mt-3"
          value={user.password}
          size="large"
          onChange={onChange}
        />

        <Button
          onClick={handleSubmit}
          type="primary"
          className="mt-2"
          block
          disabled={!user.email || user.password.length < 6}
          shape="round"
          icon={<MailOutlined />}
          size="large"
        >
          Login with Email & Password
        </Button>

        <Button
          onClick={handleGoogleSubmit}
          type="danger submit"
          className="mt-2"
          block
          shape="round"
          icon={<GoogleOutlined />}
          size="large"
        >
          Login with Gmail
        </Button>

        <Link to="/forgot/password" className="text-danger float-right">
          Forgot Password
        </Link>
      </Form>
    );
  };
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="d-flex justify-content-center align-items-center">
            <img alt="logo" src="/images/logo.png" />
          </div>
          {LoginForm()}
        </div>
      </div>
    </div>
  );
};

export default Login;
