import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/nav/header";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";

import ProtectRoutes from "./components/route/ProtectRoute";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route element={<ProtectRoutes />}>
          {/* insert the routes you want to proctect dito*/}
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot/password" element={<ForgotPassword />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
