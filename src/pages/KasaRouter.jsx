import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout"
import ErrorPage from "./ErrorPage";
import Home, { loader as homeLoader } from "./Home";
import About from "./About";
import Logement from "./Logement"

import "../styles/index.css"

const KasaRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "logement/:logementId",
        element: <Logement />,
      },
    ],
  },
]);
    
export default KasaRouter