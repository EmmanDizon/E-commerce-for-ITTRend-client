import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/nav/header";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";

import ProtectRoutes from "./components/route/ProtectRoute";
import AuthRestrictionRoute from "./components/route/AuthRestrictionRoute";

const App = () => {
  return (
    <React.Fragment>
      <Header />
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
