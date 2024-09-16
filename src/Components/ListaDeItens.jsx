import { useState, useEffect } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link, useOutletContext } from "react-router-dom";

export default function ListaDeItens() {

    const { valorPesquisado } = useOutletContext();

    const [itens, setItens] = useState([]);
    const [pagina, setPagina] = useState(0);
    const [MaxPagina, setMaxPagina] = useState(0);
    const totalPaginas = Math.ceil(MaxPagina / 6);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(valorPesquisado != '' ?
                    `http://localhost:8080/item/nome/${valorPesquisado}` :
                    `http://localhost:8080/item/todos?pagina=${pagina}&quantidade=6`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                    },
                })
                if (response.ok && valorPesquisado != '') {
                    const data = await response.json();
                    setItens(data.item);
                    setMaxPagina(data.total)
                } else {
                    const data = await response.json();
                    setItens(data.item);
                    setMaxPagina(data.total)
                }
            } catch (error) {

                console.error('Erro na API', error)
            }
        }
        fetchData();
    }, [valorPesquisado, pagina]);

    return (
        <div className="mx-32 mt-24">
            <div className="mt-12 mb-4 grid grid-cols-1 gap-x-6 gap-y-10 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {itens != null ? (
                    itens.map((item) => (
                        <Link to={'./item?id=' + item.id}>
                            <div key={item.id} className="w-80 p-2 border-2 rounded-md shadow-md bg-gray-200 hover:scale-105 hover:duration-100">
                                <div className="flex justify-center items-center aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none lg:h-72">
                                    <img
                                        alt={item.imagem}
                                        src={item.imagem}
                                        className="h-64 w-auto border shadow-md"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-gray-900 font-medium">
                                            {item.nome}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{item.tipo}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-800">{item.numPagina}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className='text-2xl font-bold text-gray-900'>Item pesquisado não encontrado ...</p>
                )}
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
        </div >
    )
}