import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import AddBooks from './components/AddBooks/AddBooks.jsx';
import AllBooks from './components/AllBooks/AllBooks.jsx';
import BorrowBooks from './components/BorrowBooks/BorrowBooks.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path:'/addBooks',
        element:<PrivateRoute><AddBooks></AddBooks></PrivateRoute>,
      },
      {
        path:'allBooks',
        element:<PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
      },
      {
        path:'borrow',
        element:<PrivateRoute><BorrowBooks></BorrowBooks></PrivateRoute>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
