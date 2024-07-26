import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './Login.jsx';
import Item from './Components/Item.jsx'
import Home from './Home.jsx';
import Card from './Components/Card.jsx';
import Cadastrar from './Components/Cadastro.jsx'
import CadastroUsuario from './Components/UsuarioCadastro.jsx';
import CadastroItem from './Components/ItemCadastro.jsx';
import './index.css';

const router = createBrowserRouter([
  {path: "/", element: <Login/>},
  {path: "home", element: <Home/>, children: [
    {path: "", element: <Card/>},
    {path: "cadastrar", element: <Cadastrar/>},
    {path: "item", element: <Item/>},
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
