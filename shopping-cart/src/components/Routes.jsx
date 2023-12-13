import React from 'react';
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const Router = () => {
    const router = createBrowserRouter ([
        {
          path: "/",
          element: <App/>,
        }
      ])
      
      return <RouterProvider router={router}></RouterProvider>
}

export default Router;