import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './Components/PaginaLogin/Login';
import Cadastro from './Components/PaginaLogin/Cadastro';
import MinhaLista from './Components/MinhaLista/Lista';
import Item from './Components/Item';
import Home from './Home';
import LerMais from './Components/LerMais';
import ListaDeItens from './Components/ListaDeItens';
import Admin from './Admin';
import CadastrarUsuario from './Components/Cadastro/CadastrarUsuario'
import CadastrarItem from './Components/Cadastro/CadastrarItem'
import AtualizarUsuario from './Components/Atualizar/AtualizarUsuario'
import AtualizarItem from './Components/Atualizar/AtualizarItem'

import './index.css';

const router = createBrowserRouter([
  {path: "/", element: <Login/>},
  {path: "cadastro", element: <Cadastro/>},
  {path: "home", element: <Home/>, children: [
    {path: "", element: <ListaDeItens/>},
    {path: "item", element: <Item/>},
    {path: "MinhaLista", element: <MinhaLista/>},
    {path: "admin", element: <Admin/>},
  ]},
  {path: "leitura", element: <LerMais/>},
  {path: "cadastrar_Usuario", element: <CadastrarUsuario/>},
  {path: "cadastrar_Item", element: <CadastrarItem/>},
  {path: "atualizar_Usuario", element: <AtualizarUsuario/>},
  {path: "atualizar_Item", element: <AtualizarItem/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
