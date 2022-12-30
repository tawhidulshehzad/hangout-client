import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import ServiceDetails from "../../Pages/ServicedDetails/ServiceDetails";
import PrivateRoute from "../../Router/PrivateRoute/PrivateRoute";
import Addservices from "../../Pages/Shared/AddServices/Addservices";
import Signup from "../../Pages/Signup/Signup";
import Blog from "../../Pages/Blog/Blog";
import ReviewUpdate from "../../Pages/ReviewUpdate/ReviewUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/update-reviews/:id",
        element: <ReviewUpdate></ReviewUpdate>,
        loader: ({params}) => fetch(`http://localhost:5000/update-reviews/${params.id}`)
      },
      {
        path: "/allservices",
        element: <AllServices></AllServices>,
      },
      {
        path: "/servicedetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <Reviews></Reviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addservices",
        element: (
          <PrivateRoute>
            <Addservices></Addservices>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
