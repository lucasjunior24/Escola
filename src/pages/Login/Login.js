import "./Login.css";

import api from '../../services/api';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // login lucas@gmail.com
    // senha Lucas@123

    const history = useHistory();

    async function login(event) {
        event.preventDefault();

        const data = { email, password };

        try {
            const response = await api.post('api/account/loginuser', data);
            localStorage.setItem('email', email);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('expiration', response.data.token);

            history.push('/alunos');

        } catch(error) {
            alert('O login falhou ' + error)
        }
    }

    return (
        <div className='main-login'>
            <div className='container-login'>
                <div className='login-left'>

                </div>
                <div className='login-rigth'>
                    <form onSubmit={login}>
                        <h1>Cadastro de Alunos</h1>
                        <input placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} 
                        />
                        <input placeholder="Password" type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                        />
                        <button className="button button-green" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}