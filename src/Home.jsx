import { Outlet } from 'react-router-dom'
import Cabecalho from './Components/Cabecalho.jsx'

export default function Home() {

    return (
        <div>
            <div className='fixed inset-x-0 top-0'>
                <Cabecalho />
            </div>
            <div className='mx-32 mt-16 m-10'>
                <Outlet />
            </div>
        </div>
    )
}