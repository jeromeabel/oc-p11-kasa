import { createBrowserRouter, Outlet } from "react-router-dom";

import Layout from "./pages/Layout"
import ErrorPage from "./pages/ErrorPage";
import Home, { loader as homeLoader } from "./pages/Home";
import About from "./pages/About";
import Accomodation from "./pages/Accomodation"

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    //errorElement: <ErrorPage />,
    children: [
      {
        path: "*",
        element: <Outlet />,
        errorElement:  <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          { path: "about", element: <About />,},
          { path: "accomodation/:accomodationId", element: <Accomodation />,},
        ],
      },
    ],
  },
]);

export default AppRouter