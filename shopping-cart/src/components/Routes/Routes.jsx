import React from 'react';
import Home from '../Home/Home.jsx';
import Shop from '../Shop/Shop.jsx';
import Cart from '../Cart/Cart.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const Router = () => {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <Home/>,
      children: [
        {path: "/shop", element: <Shop/>},
        {path: "/cart", element: <Cart/>},
      ]
    },
  ])
    
  return <RouterProvider router={router}></RouterProvider>
}

export default Router;