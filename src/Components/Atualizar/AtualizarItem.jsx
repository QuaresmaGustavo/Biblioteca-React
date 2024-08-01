import { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { useNavigate, useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export default function ItemCadastro() {

  const query = useQuery();
  const id = query.get('id');

  const navegacao = useNavigate();

  function cancelar() {
    navegacao("/home/admin")
  }

  const [publicacao, setPublicacao] = useState('');
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [editora, setEditora] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [numPag, setNumPag] = useState('');

  const valueInputNome = (e) => {
    setNome(e.target.value);
  };

  const valueInputCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const valueInputEditora = (e) => {
    setEditora(e.target.value);
  };

  const valueInputDescricao = (e) => {
    setDescricao(e.target.value);
  };

  const valueInputImagem = (e) => {
    setImagem(e.target.value);
  };

  const valueInputNumPag = (e) => {
    setNumPag(e.target.value);
  };

  const valueInputPublicacao = (e) => {
    setPublicacao(e.target.value);
  };

  const confirmar = () => {
    const fetchData = async () => {
      if (nome != '') {
        try {
          const response = await fetch(`http://localhost:8080/item/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify({
              nome: nome,
              tipo: categoria,
              editora: editora,
              descricao: descricao,
              imagem: imagem,
              numPagina: numPag,
              publicacao: publicacao
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
    <form className='w-2/3 mx-auto mt-16 p-2 border border-gray-900/10 shadow-md rounded-md'>
      <div>
        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              nome
            </label>
            <div className="mt-2 w-full">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  type="text"
                  value={nome}
                  onChange={valueInputNome}
                  className="block flex-1 border-0 bg-transparent p-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Categoria
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <select
                  value={categoria}
                  onChange={valueInputCategoria}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                >
                  <option>-</option>
                  <option>Aventura</option>
                  <option>Biografia</option>
                  <option>Conto</option>
                  <option>Romance</option>
                  <option>Fantasia</option>
                  <option>Ficção</option>
                </select>
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Editora
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={editora}
                onChange={valueInputEditora}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Nº páginas
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={numPag}
                onChange={valueInputNumPag}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Data da publicação
            </label>
            <div className="mt-2">
              <input
                type="date"
                placeholder='Data'
                value={publicacao}
                onChange={valueInputPublicacao}
                className="block w-full p-2 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Descrição
            </label>
            <div className="mt-2">
              <textarea
                rows={10}
                value={descricao}
                onChange={valueInputDescricao}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Adicionar foto
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Baixar arquivo</span>
                    <input type="file"
                      value={imagem}
                      onChange={valueInputImagem}
                      className="sr-only" />
                  </label>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF até 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-3">
        <button 
          type="button"
          className="block w-auto rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          onClick={cancelar}
        >
          Cancelar
        </button>
        <button
          type="button"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={confirmar}
        >
          Confirmar
        </button>
      </div>
    </form>
  )
}

/*
  if(response.ok){
  const data = await response.json();
  setNome(data.nome);
  setCategoria(data.tipo);
  setEditora(data.editora);
  setDescricao(data.descricao);
  setImagem(data.imagem);
  setNumPag(data.numPagina);
  setPublicacao(data.publicacao);
}
*/