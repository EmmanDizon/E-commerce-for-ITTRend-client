import React from "react";
import { Routes, Route } from "react-router-dom";

import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

import Main from "./components/layout/Main";
import PublicMain from "./components/layout/PublicMain";

import HomePage from "./screens/HomePage";
import Dashboard from "./screens/Dashboard";
import Page404 from "./screens/Page404";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";

import ProtectRoutes from "./components/route/ProtectRoute";
import AuthRestrictionRoute from "./components/route/AuthRestrictionRoute";

import Product from "./pages/Product";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<ProtectRoutes />}>
          {/*routes you want to proctect if the user is not log in*/}
            <Route element={<Main/>}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Page404 />} />
            </Route>
        </Route>
        <Route element={<AuthRestrictionRoute />}>
          {/*routes restricted if the user is log in*/}
          <Route element={<PublicMain/>}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot/password" element={<ForgotPassword />} />
            <Route path="product/:product_id" element={<Product />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
