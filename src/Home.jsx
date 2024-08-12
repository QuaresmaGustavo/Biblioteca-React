import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Cabecalho from './Components/Cabecalho.jsx'

export default function Home() {

    return (
        <>
            <Cabecalho/>
            <div className='px-12'>
                <Outlet/>
            </div>
        </>
    )
}