import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../components/app/app";
import ErrorPage from "../components/app/errorPage";
import HomePage from "../components/home/homePage";
import AboutPage from "../components/info/aboutPage";
import ContactPage from "../components/contact/contactPage";
  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "home",
          element: <HomePage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "about",
          element: <HomePage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "contact",
          element: <HomePage />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);