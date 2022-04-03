import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/nav/header";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import CompleteRegistration from "./auth/CompleteRegistration";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginUser } from "./redux/actions/user_action";
import ForgotPassword from "./auth/ForgotPassword";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userParams) => {
      if (userParams) {
        dispatch(loginUser(userParams));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/complete" element={<CompleteRegistration />} />
        <Route path="/forgot/password" element={<ForgotPassword />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
