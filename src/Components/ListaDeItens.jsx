import { useState, useEffect } from "react"
import { Link} from "react-router-dom";
import Buscar from './InputPesquisar'; 

export default function ListaDeItens () {

    const [valorPesquisado, setValorPesquisado] = useState('');
    //const valorPesquisado = useOutletContext();

    const [itens, setItens] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(valorPesquisado != '' ? `http://localhost:8080/item/nome/${valorPesquisado}`: 'http://localhost:8080/item/todos', {
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
            <Buscar setValorPesquisado={setValorPesquisado}/>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {itens.map((item) => (
                    <div key={item.id} className="w-80 p-2 border-2 rounded-md shadow-md">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <Link to={'./item?id=' + item.id}>
                                <img
                                    alt={item.imagem}
                                    src={item.imagem}
                                    className="h-full w-full object-center lg:h-full lg:w-full"
                                />
                            </Link>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-gray-900">
                                    {item.nome}
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{item.editora}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-800">{item.numPagina}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}