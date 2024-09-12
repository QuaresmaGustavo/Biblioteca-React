import { Outlet } from 'react-router-dom'
import Cabecalho from './Components/Cabecalho.jsx'
import { useEffect, useState } from 'react';

export default function Home() {

    const [valorPesquisado, setValorPesquisado] = useState('');

    /*useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/item/total", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                    },
                })
                if (response.ok) {
                    const data = await response.json();
                    sessionStorage.setItem("qtd_total_itens",data)
                } else {
                    console.error('Resposta da API está indefinida');
                }
            } catch (error) {
                console.error('Erro na API', error)
            }
        }
        fetchData();
    }, []);*/

    return (
        <>
            <Cabecalho setValorPesquisado={setValorPesquisado} />
            <div className="mt-20">
                <Outlet context={{ valorPesquisado }} />
            </div>
        </>
    )
}