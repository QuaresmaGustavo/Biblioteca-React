import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './Components/Login.jsx';
import Home from './Components/Home.jsx';
import './index.css';

const router = createBrowserRouter([
  {path: "/", element: <Login/>},
  {path: "/home", element: <Home/>},
  /*{path: "/cadastro", element: <Cadastro/>, children: [
    {path: "/item", element: <cadastrarItem/>},
    {path: "/usuario", element: <cadastrarUsuario/>},
  ]}*/
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
