import { createRoot } from "react-dom/client";
import { RouterProvider,createBrowserRouter } from "react-router";
import App from "./App";
import CountriesPage from "./components/CountriesPage";
import ErrorPage from "./components/ErrorPage";
import CountryDetails from "./components/CountryDetails";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children:[
        {
            path:'/',
            element:<CountriesPage/>
        },
        {
            path:'/country',
            element:<CountryDetails/>
        }
    ]
  },
]);
const root=createRoot(document.querySelector('#root'));

root.render(<RouterProvider router={router}/>)