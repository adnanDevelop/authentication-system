import { useRoutes, Outlet } from "react-router-dom";

// Pages
import About from "../modules/About";
import Contact from "../modules/Contact";
import Home from "../modules/Home";
import Login from "../modules/auth/Login";
import Signup from "../modules/auth/Signup";
import Layout from "../component/Layout";
import { ProtectedRoute, PublicRoute } from "../redux/RouteAuth";

export const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
    {
      element: (
        <PublicRoute>
          <Outlet />
        </PublicRoute>
      ),
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
  ]);
};
