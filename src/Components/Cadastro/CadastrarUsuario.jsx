///PÁGINA OK

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function UsuarioCadastro() {

  const navegacao = useNavigate();

  function cancelar() {
    navegacao("/home/admin")
  }

  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [origem, setOrigem] = useState(false)

  const valueInputNome = (e) => {
    setNome(e.target.value);
  };

  const valueInputLogin = (e) => {
    setLogin(e.target.value);
  };

  const valueInputSenha = (e) => {
    setSenha(e.target.value);
  };

  const valueInputOrigem = (e) => {
    setOrigem(e.target.value);
  };

  const cadastrar = () => {
    const fetchData = async () => {
      if (nome && login && senha && origem != '') {
        try {
          const response = await fetch('http://localhost:8080/usuario/cadastro', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({
              nome: nome,
              login: login,
              senha: senha,
              status: origem
            })
          })
          if (response.ok) {
            navegacao("/home/admin");
          }
        } catch (error) {
          console.log("erro na requisição " + error)
        }
      } else {
        alert("Os campos não podem estar vazios")
      }
    }
    fetchData();
  };

  return (
    <form method="POST" className="w-2/3 mx-auto mt-16 p-2 border border-gray-900/10 shadow-md rounded-md">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold leading-6 text-gray-900">
            Nome
          </label>
          <div className="my-2.5">
            <input
              type="text"
              value={nome}
              onChange={valueInputNome}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm w-64 font-semibold leading-6 text-gray-900">
            Login
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              value={login}
              onChange={valueInputLogin}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold leading-6 text-gray-900">
            Senha
          </label>
          <div className="mt-2.5">
            <input
              type="password"
              value={senha}
              onChange={valueInputSenha}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <div className='my-2'>
        <label className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
          Origem
        </label>
        <div className='pl-4'>
          <div>
            <input type="radio"
              value="FUNCIONARIO"
              checked={origem === 'FUNCIONARIO'}
              onChange={valueInputOrigem}
              className="form-radio h-3.5 w-3.5 text-indigo-600 transition duration-150 ease-in-out"
            />
            <label className="text-sm text-gray-700 ps-2">Funcionario</label>
          </div>
          <div>
            <input type="radio"
              value="USUARIO"
              checked={origem === 'USUARIO'}
              onChange={valueInputOrigem}
              className="form-radio h-3.5 w-3.5 text-indigo-600 transition duration-150 ease-in-out"
            />
            <label className="text-sm text-gray-700 ps-2">Usuario</label>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="block w-auto rounded-md bg-red-600 mr-3 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          onClick={cancelar}
        >
          Cancelar
        </button>

        <button
          type="button"
          className="block w-auto rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={cadastrar}
        >
          Cadastrar
        </button>
      </div>
    </form>
  )
}