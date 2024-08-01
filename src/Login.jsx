import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const navegacao = useNavigate();

    const valueInputLogin = (e) => {
        setLogin(e.target.value);
    };

    const valueInputSenha = (e) => {
        setSenha(e.target.value);
    };

    const entrar = () => {
        const fetchData = async () => {
            if (login != '' && senha != '') {
                try {
                    const response = await fetch('http://localhost:8080/usuario/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            login: login,
                            senha: senha
                        })
                    }
                    )
                    if (response.ok) {
                        const data = await response.json();
                        sessionStorage.setItem('token', data.token);
                        navegacao("/home");
                    }
                } catch (error) {
                    console.log("erro na requisição " + error)
                }
            } else {
                alert("Os campos não podem estar vazios")
            }
        }
        fetchData();
    };

    return (

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://cdn-icons-png.flaticon.com/512/225/225993.png"
                    className="mx-auto h-20 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Acesse sua conta
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form method="POST" className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Login
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                required
                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={login} onChange={valueInputLogin}
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
                                required
                                autoComplete="current-password"
                                value={senha} onChange={valueInputSenha} className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className="text-sm my-2">
                            <a href="" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Esqueceu sua senha?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type='button'
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={entrar}
                        >
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;

{/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}

