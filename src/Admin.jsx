import { useState} from "react";
import TabelaUsuario from './Components/Tabela/TabelaUsuario'
import TabelaItem from './Components/Tabela/TabelaItem'

export default function Admin() {

    const [displayCadastroUsuario, setDisplayCadastroUsuario] = useState('hidden');
    const [displayCadastroItem, setDisplayCadastroItem] = useState('hidden');

    function visualizarCadastroUsuario() {
        setDisplayCadastroUsuario(displayAtual => displayAtual === 'hidden' ? 'block' : 'hidden');
    }

    function visualizarCadastroItem() {
        setDisplayCadastroItem(displayAtual => displayAtual === 'hidden' ? 'block' : 'hidden');
    }

    return (
        <div className='grid justify-items-center content-center'>
            <div className='my-4 grid w-full px-12 justify-items-center'>
                <button type="button" onClick={visualizarCadastroUsuario}
                    className='bg-white hover:bg-gray-100 text-gray-800 font-semibold uppercase w-96 py-2 px-4 border border-gray-400 rounded shadow'>
                    Usuarios
                </button>
                <div className="w-full">
                    <div className={displayCadastroUsuario}>
                        <TabelaUsuario />
                    </div>
                </div>
            </div>

            <div className='my-4 grid w-full px-12 justify-items-center'>
                <button type="button" onClick={visualizarCadastroItem}
                    className='bg-white hover:bg-gray-100 text-gray-800 font-semibold uppercase w-96 py-2 px-4 border border-gray-400 rounded shadow'>
                    Itens
                </button>
                <div className="w-full">
                    <div className={displayCadastroItem}>
                        <TabelaItem />
                    </div>
                </div>
            </div>
        </div>
    );
};