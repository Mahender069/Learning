import { createRoot } from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "./components/Home";
import About from "./components/About";



let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
    ]
  }
]);

const root=createRoot(document.querySelector('#root'));
root.render(
    <RouterProvider router={router} />,
)