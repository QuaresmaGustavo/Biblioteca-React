import { useState, useEffect } from "react";

export default function TabelaUsuario() {
    const [usuarios, setUsuario] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/usuario/todos', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                    },
                })
                if (response !== undefined) {
                    const data = await response.json();
                    setUsuario(data);
                } else {
                    console.error('Resposta da API está indefinida');
                }
            } catch (error) {
                console.error('Erro na API', error)
            }
        }
        fetchData();
    }, []);

    return (
        <div className="container mx-auto mt-10 ">
            <div className="flex flex-row-reverse mb-4">
                <button className="flex justify-center items-center rounded-lg bg-indigo-600 px-2 py-2 shadow-sm text-white text-sm uppercase font-medium
                hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <a href="/cadastrar_Usuario">
                        novo usuario
                    </a>
                </button>
            </div>
            <div className="overflow-x-auto shadow-md rounded-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 text-gray-400">
                    <thead className="text-xs text-white text-center uppercase text-black border-b bg-gray-500">
                        <tr>
                            <th className="px-6 py-3">
                                <span>nome</span>
                            </th>
                            <th className="px-6 py-3">
                                <span>login</span>
                            </th>
                            <th className="px-6 py-3">
                                <span>origem</span>
                            </th>
                            <th className="px-6 py-3">
                                <span className="sr-only">Editar</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id} className="bg-white border-b bg-gray-800 border-gray-300 text-center">
                                <td className="px-6 py-4">
                                    {usuario.nome}
                                </td>
                                <td className="px-6 py-4">
                                    {usuario.login}
                                </td>
                                <td className="px-6 py-4">
                                    {usuario.status}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center">
                                        <button type='button'
                                        className="flex justify-center items-center w-12 rounded-l-lg border-r border-gray-700 bg-indigo-600 py-1 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            <a href={'/atualizar_usuario/?id='+usuario.id}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                                </svg>
                                            </a>
                                        </button>
                                        <button type='button' 
                                        className="flex justify-center items-center w-12 rounded-r-lg bg-indigo-600 py-1 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            <a href={"/modal_usuario?id="+usuario.id}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>
                                            </a>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};