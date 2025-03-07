import {createBrowserRouter} from "react-router-dom"
import App from "../App";
import Listings from "../pages/Listings";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import SingleHouse from "../pages/SingleHouse";

const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/listings",
                element: <Listings/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }, {
                path: "/houses/:id",
                element: <SingleHouse/>
            },
        ]
    },
])

export default router;