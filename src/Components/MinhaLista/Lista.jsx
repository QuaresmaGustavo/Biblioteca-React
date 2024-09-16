import { useState, useEffect } from "react";
import BtnRemoverItem from './BtnRemoverItem';

export default function Lista() {

    const [itens, setItens] = useState([]);
    const idUsuario = sessionStorage.getItem('id');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/minhaLista/buscarLista/${idUsuario}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                    },
                })
                if (response.ok) {
                    const data = await response.json();
                    setItens(data);
                }
            } catch (error) {

                console.error('Erro na API', error)
            }
        }
        fetchData();
    }, [itens]);

    return (
        <div className="my-16">
            {itens.length > 0 ? (
                <div className="grid grid-cols-5 mt-6 h-full">
                    {itens.map((i) => (
                        <div key={i.item.id} className="col-span-3 col-start-2 grid-rows-3 my-4">
                            <div className="grid grid-cols-4 p-6 border rounded-md shadow-lg bg-gray-200">
                                <img src={i.item.imagem} alt={i.item.nome} className="content-center shadow-lg w-64 h-80" />
                                <div className="grid grid-cols-4 col-span-3">
                                    <h3 className="col-span-3 mb-4 text-lg font-bold">{i.item.nome}</h3>
                                    <div className="justify-self-end place-self-start">
                                        <BtnRemoverItem id={i.item.id} />
                                    </div>
                                    <p className="col-span-4 content-center px-6 text-sm">{i.item.descricao}</p>
                                    <a href="/leitura" className="col-start-4 place-self-end w-24 mt-3">
                                        <button className="bg-blue-600 w-16 h-6 text-white rounded-sm hover:bg-blue-300">
                                            Ler
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (<div className="flex justify-center mx-auto h-screen">
                <p className="self-center">Você ainda não possui livros na sua lista!</p>
            </div>)}
        </div>
    );
};