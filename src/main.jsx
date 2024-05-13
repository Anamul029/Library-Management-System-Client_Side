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
import ErrorPage from './components/error page/ErrorPage.jsx';
import AllSubBooks from './components/AllSubBooks/AllSubBooks.jsx';
import Details from './components/AllSubBooks/Details.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
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
      },
      {
        path:'books/:category',
        element:<PrivateRoute><AllSubBooks></AllSubBooks></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/books')
      },
      {
        path:'/viewDetails/:_id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/books')

      },
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
