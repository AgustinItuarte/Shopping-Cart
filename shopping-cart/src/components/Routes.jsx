import React from 'react';
import Home from './Home.jsx';
import Shop from './Shop.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const Router = () => {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "shop",
      element: <Shop/>,
    }
  ])
    
  return <RouterProvider router={router}></RouterProvider>
}

export default Router;