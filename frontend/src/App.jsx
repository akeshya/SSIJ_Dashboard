import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import SignIn from "./components/Auth/SignUp";
import SignUp from "./components/Auth/SingIn";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Orders from "./screens/Orders/Orders";
import OrderDetails from "./screens/Orders/OrdersDetalis";
import { HeaderProvider } from "./Contexts/HeaderContext";
import AddProduct from "../src/screens/Product/AddProduct";
import Inventory from "./screens/Product/Inventory";
import ProductList from "../src/screens/Product/ProductList";
import Retailers from "./screens/Users/Retailers";
import Employees from "./screens/Users/Employees";
import Vendors from "./screens/Users/Vendors";
import Workers from "./screens/Users/Workers";
import Categotie from "./screens/Categorie/Categotie";
import Createnotification from "./screens/Notification/Createnotification";
import PastNotification from "./screens/Notification/PastNotification";
import AddEmployee from "./screens/Users/AddEmployee";
import AddWorkers from "./screens/Users/AddWorkers";

const App = () => {
  return (
    <HeaderProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order-details/:id" element={<OrderDetails />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/retailers" element={<Retailers />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/categorie-list" element={<Categotie />} />
        <Route path="/createnotification" element={<Createnotification />} />
        <Route path="/pastNotification" element={<PastNotification />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/add-workers" element={<AddWorkers />} />
      </Routes>
    </HeaderProvider>
  );
};

export default App;
