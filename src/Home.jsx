import { Outlet } from 'react-router-dom'
import Cabecalho from './Components/Cabecalho.jsx'

export default function Home() {

    return (
        <>
            <Cabecalho/>
            <div className='mx-32 mb-10'>
                <Outlet/>
            </div>
        </>
    )
}