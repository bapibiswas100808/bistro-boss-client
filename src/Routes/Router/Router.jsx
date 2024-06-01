import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Components/Home/Home";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Dashboard from "../../Components/Dashboard/Dashboard";
import OurMenu from "../../Components/OurMenu/OurMenu";
import OurShop from "../../Components/OurShop/OurShop";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashCart from "../../Components/DashCart/DashCart";
import DashAllUsers from "../../Components/DashAllUsers/DashAllUsers";
import DashAddItem from "../../Components/DashAddItem/DashAddItem";
import AdminRoute from "../AdminRoute/AdminRoute";
import DashManageItem from "../../Components/DashManageItem/DashManageItem";
import DashUpdate from "../../Components/DashUpdate/DashUpdate";
import Payment from "../../Components/Payment/Payment";
import AllPayment from "../../Components/AllPayment/AllPayment";
import AdminHome from "../../Components/AdminHome/AdminHome";
import UserHome from "../../Components/UserHome/UserHome";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/contact", element: <ContactUs></ContactUs> },
      {
        path: "/menu",
        element: (
          <PrivateRoute>
            <OurMenu></OurMenu>
          </PrivateRoute>
        ),
      },
      { path: "/shop/:category", element: <OurShop></OurShop> },
      { path: "/shop", element: <OurShop></OurShop> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
  {
    path: "dash",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      { path: "cart", element: <DashCart></DashCart> },
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      { path: "userHome", element: <UserHome></UserHome> },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "allPayment",
        element: <AllPayment></AllPayment>,
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <DashAllUsers></DashAllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <DashAddItem></DashAddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <DashManageItem></DashManageItem>
          </AdminRoute>
        ),
      },

      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <DashUpdate></DashUpdate>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/MenuCollections/${params.id}`),
      },
    ],
  },
]);

export default Router;
