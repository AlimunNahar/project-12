import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../layout/Main";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Blog from "../../Pages/Blog/Blog";
import MyOrders from "../../Pages/Dashboard/Buyers/MyOrders";
import Categories from "../../Pages/Categories/Categories";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import DashboardLayout from "../../layout/DashboardLayout";
import BuyerRoute from "../Routes/BuyerRoute";
import Payment from "../../Pages/Dashboard/Buyers/Payment";
import AddAProduct from "../../Pages/Dashboard/Sellers/AddAProduct";
import SellerRoute from "./SellerRoute";
import MyProducts from "../../Pages/Dashboard/Sellers/MyProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <DisplayError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
        element: (
          <PrivateRoute>
            <Categories />
          </PrivateRoute>
        ),
      },
      {
        path: "/myOrders",
        element: (
          <BuyerRoute>
            <MyOrders />
          </BuyerRoute>
        ),
      },
      {
        path: "/payment",
        element: (
          <BuyerRoute>
            <Payment />
          </BuyerRoute>
        ),
      },
      {
        path: "/addProduct",
        element: (
          <SellerRoute>
            <AddAProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/myProducts",
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [],
  },
]);

export default router;
