import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Cabecalho from './Components/Cabecalho.jsx'

export default function Home() {

    const [valorPesquisado, setValorPesquisado] = useState('');
    console.log(`Home: ${valorPesquisado}`)

    return (
        <>
            <Cabecalho/>
            <div className='px-12'>
                <div className="flex justify-center px-2 py-2 mx-36">
                    <input type="text"
                        className="px-2 py-1 font-medium rounded-md shadow-md bg-gray-300 hover:bg-gray-100 sm:w-4/5"
                        placeholder="Pesquisar por um livro"
                        onChange={(e) => setValorPesquisado(e.target.value)} />
                </div>
                <Outlet context={ valorPesquisado } />
            </div>
        </>
    )
}