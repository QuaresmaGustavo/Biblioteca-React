import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import Buscar from './InputPesquisar';

export default function ListaDeItens() {

    const [valorPesquisado, setValorPesquisado] = useState('');

    const [itens, setItens] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(valorPesquisado != '' ? `http://localhost:8080/item/nome/${valorPesquisado}` : 'http://localhost:8080/item/todos', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                    },
                })
                if (response !== undefined) {
                    const data = await response.json();
                    setItens(data);
                } else {
                    console.error('Resposta da API está indefinida');
                }
            } catch (error) {

                console.error('Erro na API', error)
            }
        }
        fetchData();
    }, [valorPesquisado]);

    return (
        <div className="bg-white">
            <Buscar setValorPesquisado={setValorPesquisado} />
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {itens.length > 0 ? (
                    itens.map((item) => (
                        <div key={item.id} className="w-80 p-2 border-2 rounded-md shadow-md hover:scale-105 hover:duration-100">
                            <div className="flex justify-center items-center aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <Link to={'./item?id=' + item.id}>
                                    <img
                                        alt={item.imagem}
                                        src={item.imagem}
                                        className="h-72 w-auto"
                                    />
                                </Link>
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
                    ))
                ) : (
                    <p className='text-2xl font-bold text-gray-900'>Item pesquisado não encontrado ...</p>
                )}
            </div>
        </div>
    )
}