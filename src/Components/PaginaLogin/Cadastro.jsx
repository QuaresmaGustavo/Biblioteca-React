import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [nome, setNome] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const navegacao = useNavigate();

    const cadastrar = async () => {
            if (nome && login && senha != '') {
                try {
                    const response = await fetch('http://localhost:8080/usuario/cadastrar', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            nome: nome,
                            login: login,
                            senha: senha,
                            status: "USUARIO"
                        })
                    })
                    if (response.ok) {
                        alert("Usuario Cadastrado com sucesso!");
                        navegacao("/");
                    }
                } catch (error) {
                    console.log("erro na requisição " + error)
                }
            } else {
                alert("Os campos não podem estar vazios")
            }
        };

    return (
        <div className="grid grid-cols-3 gap-4 place-content-center w-screen h-screen px-6 py-12 bg-blue-300">
            <div className="col-start-2 m-20 pt-3 pb-6 shadow-md border rounded-md border-gray-500 bg-white">
                <div className="relative top-0 w-8 ml-2">
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6 hover:scale-125 hover:duration-150">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </Link>
                </div>
                <div className="grid grid-cols-6 sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://cdn-icons-png.flaticon.com/512/2784/2784504.png"
                        className="h-16 w-auto"
                    />
                    <h2 className="col-start-2 col-span-4 mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        CADASTRO
                    </h2>
                    <p className="col-start-1 col-span-6 text-center">Digite suas informações nos campos abaixo</p>
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form method="POST" className="space-y-6">
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Nome
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    value={nome} onChange={(e) => setNome(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Login
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    value={login} onChange={(e) => setLogin(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Senha
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    value={senha} onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type='button'
                                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md shadow-blue-600/50 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={cadastrar}
                            >
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}