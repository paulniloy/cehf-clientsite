import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './components/Main/Main';
import Home from './components/Body/Home';
import Chef from './components/chef details/Chef';
import Error from './components/error/Error';
import Blog from './components/blogs/Blog';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Authprovider from './components/provider/Authprovider';
import Recipies from './components/Recepies/Recipies';
import Privateroute from './components/Privateroute/Privateroute';
import Aboutus from './components/about us/Aboutus';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://server-site-paulniloy.vercel.app/chef")
      },
      {
        path: "/about",
        element: <Aboutus></Aboutus>
      },
      {
        path: "/chef",
        element: <Chef></Chef>
      },
      {
        path: "/blogs",
        element: <Privateroute><Blog></Blog></Privateroute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/recipies/:id",
        element: <Privateroute><Recipies></Recipies></Privateroute>,
        loader: ({params}) => fetch(`https://server-site-paulniloy.vercel.app/chef/${params.id}`)
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
