import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Modal from '../Modal/ModalDeleteUsuario'

export default function TabelaUsuario() {
    const [usuarios, setUsuario] = useState([]);
    const [id, setIdItem] = useState('');
    const [estadoModal, setEstadoModal] = useState(false);
    const [pagina, setPagina] = useState(0);
    const [MaxPagina, setMaxPagina] = useState(0);
    const totalPaginas = Math.ceil(MaxPagina / 3);

    const AtivarModal = (id) => {
        setIdItem(id);
        setEstadoModal(true);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/usuario/todos?pagina=${pagina}&quantidade=3`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                    },
                })
                if (response.ok) {
                    const data = await response.json();
                    setUsuario(data.item);
                    setMaxPagina(data.total);
                }
            } catch (error) {
                console.error('Erro na API', error)
            }
        }
        fetchData();
    }, [usuarios, pagina]);

    return (
        <>
            {estadoModal && <Modal id={id} />}
            <div className="container mx-auto mt-10 ">
                <div className="flex flex-row-reverse mb-4">
                    <button className="flex justify-center items-center rounded-lg bg-blue-700 px-2 py-2 shadow-sm text-white text-sm uppercase font-medium
                hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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
                                                className="flex justify-center items-center w-12 rounded-l-lg border-r border-blue-700 bg-blue-600 py-1 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                                                <a href={'/atualizar_usuario/?id=' + usuario.id}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                                    </svg>
                                                </a>
                                            </button>
                                            <button type='button'
                                                className="flex justify-center items-center w-12 rounded-r-lg bg-blue-600 py-1 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                                onClick={() => { AtivarModal(usuario.id) }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="relative inset-x-0 bottom-0 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">
                        <div>
                            <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                                <button
                                    type="button"
                                    onClick={() => { setPagina(pagina >= 0 ? pagina - 1 : 0) }}
                                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                >
                                    <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                                </button>

                                <button type="button"
                                    onClick={() => { setPagina(pagina < totalPaginas-1 ? pagina + 1 : pagina ) }}
                                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                >
                                    <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};