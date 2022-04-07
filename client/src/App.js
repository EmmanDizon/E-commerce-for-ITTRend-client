import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Page404 from "./screens/Page404";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";

import ProtectRoutes from "./components/route/ProtectRoute";
import AuthRestrictionRoute from "./components/route/AuthRestrictionRoute";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<ProtectRoutes />}>
          {/*routes you want to proctect if the user is not log in*/}
        </Route>
        <Route element={<AuthRestrictionRoute />}>
          {/*routes restricted if the user is log in*/}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot/password" element={<ForgotPassword />} />
        </Route>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
