import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './Login';
import Item from './Components/Item'
import Home from './Home';
import DeletarUsuario from './Components/Modal/ModalDeleteUsuario'
import DeletarItem from './Components/Modal/ModalDeleteItem'
import Card from './Components/Card';
import Admin from './Admin'
import CadastrarUsuario from './Components/Cadastro/CadastrarUsuario'
import CadastrarItem from './Components/Cadastro/CadastrarItem'
import AtualizarUsuario from './Components/Atualizar/AtualizarUsuario'
import AtualizarItem from './Components/Atualizar/AtualizarItem'

import './index.css';

const router = createBrowserRouter([
  {path: "/", element: <Login/>},
  {path: "home", element: <Home/>, children: [
    {path: "", element: <Card/>},
    {path: "item", element: <Item/>},
    {path: "admin", element: <Admin/>},
  ]},
  {path: "cadastrar_Usuario", element: <CadastrarUsuario/>},
  {path: "cadastrar_Item", element: <CadastrarItem/>},
  {path: "atualizar_Usuario", element: <AtualizarUsuario/>},
  {path: "atualizar_Item", element: <AtualizarItem/>},
  {path: "modal_usuario", element: <DeletarUsuario/>},
  {path: "modal_item", element: <DeletarItem/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
