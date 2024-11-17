import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from '../Layout/Home';
import Profile from '../Layout/Profile';
import ErrorPage from './Page/ErrorPage';

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement:<ErrorPage/>
    },
    {
        path: "/profile",
        element: <Profile/>,
      },
  ]);


export default Router;