import { useState } from 'react'
import CadastrarUsuario from './UsuarioCadastro'
import CadastrarItem from './ItemCadastro'

export default function Example() {
    const [displayCadastroUsuario, setDisplayCadastroUsuario] = useState('hidden');
    const [displayCadastroItem, setDisplayCadastroItem] = useState('hidden');

    function visualizarCadastroUsuario() {
        setDisplayCadastroUsuario(displayAtual => displayAtual === 'hidden' ? 'block' : 'hidden');
    }

    function visualizarCadastroItem() {
        setDisplayCadastroItem(displayAtual => displayAtual === 'hidden' ? 'block' : 'hidden');
    }

    return (
        <>
            <div className='grid justify-items-center content-center'>
                <div className='my-4 grid justify-items-center'>
                    <button onClick={visualizarCadastroUsuario} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold w-96 py-2 px-4 border border-gray-400 rounded shadow'>
                        Cadastrar Novo Usuario
                    </button>
                    <div className={displayCadastroUsuario}>
                        <CadastrarUsuario />
                    </div>
                </div>

                <div className='my-4 grid justify-items-center'>
                    <button onClick={visualizarCadastroItem} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold w-96 py-2 px-4 border border-gray-400 rounded shadow'>
                        Cadastrar Nova Item
                    </button>
                    <div className={displayCadastroItem}>
                        <CadastrarItem />
                    </div>
                </div>
            </div>
        </>
    )
}
