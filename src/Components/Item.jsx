import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';
import BtnAdicionarMinhaLista from './MinhaLista/AdiconarItem';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

export default function Item() {

    const query = useQuery();
    const id = query.get('id');

    const [item, setItens] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/item/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                    },
                })
                if (response.ok) {
                    const data = await response.json();
                    setItens(data);
                } else {
                    console.error('Erro na response');
                }
            } catch (error) {
                console.error('Erro na API', error)
            }
        }
        fetchData();
    }, [id]);

    return (
        <div className="bg-white h-full">
            {item ? (
                <div className="grid grid-cols-2 mx-20 pt-6">
                    <div className="absolute mt-4 w-8">
                        <Link to="/home">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6 hover:scale-125 hover:duration-150">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </Link>
                    </div>
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
                        <div className="h-5/6 aspect-w-3 hidden overflow-hidden rounded-lg lg:block shadow-md">
                            <img
                                alt='Foto_item'
                                src={item.imagem}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="max-w-2xl px-4 pb-6 pt-10 sm:px-6 lg:max-w-2xl grid-rows-[auto,auto,1fr]">
                        <div className="lg:col-span-2 lg:border-gray-200">
                            <h1 className="text-2xl font-bold text-gray-900 border-b border-gray-200 sm:text-3xl">{item.nome}</h1>
                        </div>
                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-b lg:border-gray-200 lg:pb-6 lg:pt-6">
                            <div>
                                <h3 className="text-lg font-bold pb-2">Descrição</h3>
                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{item.descricao}</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className="grid grid-cols-4 place-items-center py-4">
                                <div className='grid grid-rows-3 justify-items-center'>
                                    <p className="text-sm font-bold pb-2">Categoria</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                    <p>{item.tipo}</p>
                                </div>
                                <div className='grid grid-rows-3 justify-items-center'>
                                    <p className="text-sm font-bold pb-2">Editora</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                    </svg>
                                    <p>{item.editora}</p>
                                </div>
                                <div className='grid grid-rows-3 justify-items-center'>
                                    <p className="text-sm font-bold pb-2">Nº Página</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
                                    </svg>
                                    <p>{item.numPagina}</p>
                                </div>
                                <div className='grid grid-rows-3 justify-items-center'>
                                    <p className="text-sm font-bold pb-2">publicado</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>
                                    <p>{new Date(item.publicacao).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</p>
                                </div>
                            </div>
                        </div>
                        <BtnAdicionarMinhaLista id={id}/>
                    </div>
                </div>
            ) : (
                <p className='text-2xl font-bold text-gray-900'>Carregando...</p>
            )}
        </div>
    );
}