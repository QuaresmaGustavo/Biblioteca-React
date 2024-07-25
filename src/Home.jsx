
import { Outlet } from 'react-router-dom'
import Cabecalho from './Components/Cabecalho.jsx'

export default function Home() {
    return (
        <>
            <Cabecalho/>
            <div className='px-8'>
                <Outlet/>
            </div>
        </>
    )
}