import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RoutePath } from "./RoutePath";
import Home from "../features/dashboard";
import SignUp from "../features/signup";
import Login from "../features/login";
import SplashScreen from "../features/splashScreen";
import UserProfile from "../features/userProfile";
import Cart from "../features/cart/Cart";
import DashBoard from "../features/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: RoutePath.Home,
    element: <Home />,
    children: [
      {
        path: RoutePath.Home + RoutePath.DashBoard,
        element: <DashBoard />,
      },

      {
        path: RoutePath.Home + RoutePath.UserProfile,
        element: <UserProfile />,
      },
      {
        path: RoutePath.Home + RoutePath.Cart,
        element: <Cart />,
      },
    ],
  },
  {
    path: RoutePath.Login,
    element: <Login />,
  },
  {
    path: RoutePath.SignUp,
    element: <SignUp />,
  },
]);

function Routes(){
  return <RouterProvider router={router}/>
}

export default Routes