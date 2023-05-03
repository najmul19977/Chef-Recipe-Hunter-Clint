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
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivateRouts from './routes/PrivateRouts.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <PrivateRouts><Home></Home></PrivateRouts>,



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
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
