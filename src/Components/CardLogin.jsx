import { useState, useEffect } from 'react';
import '../Style/CardLogin.css';

export default function CardLogin() {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [token, setToken] = useState('');

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
        <label>INSIRA SUAS CREDENCIAIS</label>
        <div className="login">
            <input id="nome" type="text" value={login} onChange={valueInputLogin} placeholder='Login'/>
            <input id="senha" type="text" value={senha} onChange={valueInputSenha} placeholder='Senha'/>
        </div>
        <button type='submit' onClick={entrar}>Entrar</button>
    </div>
)
}