import { Outlet } from 'react-router-dom'
import Cabecalho from './Components/Cabecalho.jsx'
import { useEffect, useState } from 'react';

export default function Home() {

    const [valorPesquisado, setValorPesquisado] = useState('');

    return (
        <div className="h-full">
            <Cabecalho setValorPesquisado={setValorPesquisado} />
            <div className="my-16">
                <Outlet context={{ valorPesquisado }} />
            </div>
        </div>
    )
}