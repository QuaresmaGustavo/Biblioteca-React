import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Login.css';

const Login = () => {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [token, setToken] = useState('');
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
                        method:'POST',
                        headers: { 'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            login: login,
                            senha: senha
                        })
                    }
                )
                const data = await response.json();
                setToken(data.token);

                navegacao("/home")

                console.log(token);
                } catch (error) {
                    console.log("erro na requisição "+ error)
                }
            }else{
                alert("Os campos não podem estar vazios")
            }
        }
        fetchData();
    };

return (
    <div className="conteiner">
        <div className="login">
        <label>INSIRA SUAS CREDENCIAIS</label>
        <div className="loginInputs">
            <input id="nome" type="text" value={login} onChange={valueInputLogin} placeholder='Login'/>
            <input id="senha" type="text" value={senha} onChange={valueInputSenha} placeholder='Senha'/>
        </div>
        <button type='submit' onClick={entrar}>Entrar</button>
        </div>
    </div>
)
}

export default Login;