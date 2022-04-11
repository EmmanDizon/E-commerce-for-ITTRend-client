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
import ProductsView from "./components/views/ProductsView";

import ProtectRoutes from "./components/route/ProtectRoute";
import {
  ProtectAdminRoutes,
  ProtectUserRoutes,
} from "./components/route/ProtectAdminRoute";
import AuthRestrictionRoute from "./components/route/AuthRestrictionRoute";

import Search from "./pages/Search";
import Product from "./pages/Product";
import AddToCart from "./pages/AddToCart";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<ProtectAdminRoutes />}>
          {/*routes you want to protect if the admin is not log in*/}
          <Route element={<Main />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<ProductsView />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Route>

        {/*routes you want to protect if the admin is log in*/}
        <Route element={<ProtectUserRoutes />}>
          <Route element={<PublicMain />}>
            <Route element={<ProtectRoutes />}>
              {/*routes you want to protect if the user is not log in*/}
            </Route>

            <Route element={<AuthRestrictionRoute />}>
              {/*routes restricted if the user is log in*/}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot/password" element={<ForgotPassword />} />
            </Route>

            <Route path="/home" element={<HomePage />} />
            <Route path="/cart" element={<AddToCart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/search/products" element={<Search />} />
            <Route path="product/:product_id" element={<Product />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
