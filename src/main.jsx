import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Component/Login/Login.jsx';
import NoFound from './Component/NoFound/NoFound.jsx';
import Home from './Component/Home/Home.jsx';
import Register from './Component/Register/Register.jsx';
import NewsCards from './Component/NewsCards/NewsCards.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/home',
        element: <Home></Home>,



      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '*',
        element: <NoFound></NoFound>
      }
    ]

  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
