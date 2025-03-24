import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import SignIn from "./components/Auth/SignUp";
import SignUp from "./components/Auth/SingIn";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Orders from "./screens/Orders";
import OrderDetails from "./screens/OrdersDetalis";
import { HeaderProvider } from "./Contexts/HeaderContext";
import AddProduct from "../src/screens/Product/AddProduct";

const App = () => {
  return (
    <HeaderProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/inventory" element={<OrderDetails />} />
        <Route path="/product-list" element={<OrderDetails />} />
      </Routes>
    </HeaderProvider>
  );
};

export default App;
