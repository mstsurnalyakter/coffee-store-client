import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/addCoffee",
        element: <UpdateCoffee />,
      },
      {
        path: "/updateCoffee",
        element: <AddCoffee />,
      },
    ],
  },
]);

export default router;