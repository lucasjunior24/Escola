import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiEdit, FiUserX, FiXCircle } from 'react-icons/fi';
import './Styles.css';

import api from '../../services/api';

export default function Alunos() {
    const [searchInput, SetSearchInput] = useState('');
    const [filtro, SetFiltro] = useState([]);

    const [alunos, SetAlunos] = useState([]);

    // const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    const history = useHistory();

    const searchAlunos = (searchValue) => {
        SetSearchInput(searchValue);
        if(SetSearchInput !== '') {
            const dadosFiltrados = alunos.filter((item) => {
                return Object.values(item)
                    .join('').toLowerCase()
                    .includes(searchInput.toLowerCase());
            });
            SetFiltro(dadosFiltrados);
        } else {
            SetFiltro(alunos);
        }
    }

    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        api.get('api/alunos', authorization)
            .then(response => {
                SetAlunos(response.data);
            }, token);
    });

    async function logout() {
        try {
            localStorage.clear();
            localStorage.setItem('token', '');
            authorization.headers = '';
            history.push('/');
        } 
        catch(erro) {
            alert("Não foi possivel fazer logout: ", erro);
        }
    }

    async function editluno(id) {
        try {
            history.push(`aluno/novo/${id}`);
        } catch (erro) {
            alert("Não foi possivel editar aluno");
        }
    }

    return (
        <div className='aluno-container'>
            <header>
                <span>Bem Vindo, <strong>Lucas</strong>!</span>
                <Link to="aluno/novo/0" className='button button-green'>Novo Aluno</Link>
                <button onClick={logout} type='button'>
                    <FiXCircle size={35} color="#17202a" />
                </button>
            </header>
            <form>
                <input type='text' 
                    placeholder='Nome'
                    onChange={(e) => searchAlunos(e.target.value)} />
            </form>
            <h1>Relação de alunos</h1>
            {searchInput.length > 1 ? (
                <ul>
                    {filtro.map(aluno => (
                        <li key={aluno.id}>
                            <b>Nome: </b>{aluno.nome}<br /><br />
                            <b>Email: </b>{aluno.email}<br /><br />
                            <b>Idade: </b>{aluno.idade}<br /><br />
                            <button type='button' onClick={() => editluno(aluno.id)}>
                                <FiEdit size='25' color="#17202a" />
                            </button>
                            <button type='button'>
                                <FiUserX size='25' color="#17202a" />
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <ul>
                    {alunos.map(aluno => (
                        <li key={aluno.id}>
                            <b>Nome: </b>{aluno.nome}<br /><br />
                            <b>Email: </b>{aluno.email}<br /><br />
                            <b>Idade: </b>{aluno.idade}<br /><br />
                            <button type='button' onClick={() => editluno(aluno.id)}>
                                <FiEdit size='25' color="#17202a" />
                            </button>
                            <button type='button'>
                                <FiUserX size='25' color="#17202a" />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}