import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from '../Layout/Home';
import Profile from '../Layout/Profile';
import ErrorPage from './Page/ErrorPage';
import Consultant from '../Components/Consultant';
import ServiceDetails from '../Components/ServiceDetails';
import AuthLayout from '../Layout/AuthLayout';
import Login from '../Components/Login';
import Register from '../Components/Register';
import PrivateRout from './PrivateRout';
import About from '../Components/About';


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement:<ErrorPage/>,
    },
    {
      path:"/about",
      element:<About/>
    },
    {
        path: "/profile",
        element: <PrivateRout><Profile/></PrivateRout>,
      },
      {
        path: "/consultant",
        element: <PrivateRout><Consultant /></PrivateRout>,
        loader: async () => {
          const res = await fetch("/career.json");
          const data = await res.json();
          return { data }; 
        },
      },
      {
        path: "/service/:id",
        element: <PrivateRout>
          <ServiceDetails/>
        </PrivateRout>,
        loader:async({params})=> {
 const res = await fetch("/career.json")
const data = await res.json();
const singleData = data.find(d => d.id === String(params.id));
return singleData;
},
},
{
    path:"auth",
    element:<AuthLayout/>,
    children: [
      {
        path:"/auth/login",
        element:<Login/>,
      },
      {
        path:"/auth/register",
        element:<Register/>,
      },
    ]
}

  ]);


export default Router;