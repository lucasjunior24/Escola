import { useState, useEffect } from 'react';
import { FiUserPlus, FiCornerDownLeft } from 'react-icons/fi';
import { Link, useParams, useHistory} from 'react-router-dom';

import api from '../../services/api';

import './Styles.css';

export default function NovoAluno() {
    const [id, SetId] = useState(null);
    const [nome, SetNome] = useState('');
    const [email, SetEmail] = useState('');
    const [idade, SetIdade] = useState(0);

    const {alunoId} = useParams();
    const token = localStorage.getItem('token');

    const history = useHistory();

    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        if(alunoId === '0') 
            return;
        else
            loadAluno();
    }, alunoId)

    async function loadAluno() {
        try {
            const response = await api.get(`api/alunos/${alunoId}`, authorization);
            SetId(response.data.id);
            SetNome(response.data.nome);
            SetEmail(response.data.email);
            SetIdade(response.data.idade);
        } 
        catch(erro) {
            alert("Erro ao recuperar aluno: ", erro);
            history.push('/alunos');
        }
    }

    async function saveOrUpdate(event) {
        event.preventDefault();
        
        const data = {
            nome,
            email,
            idade
        }

        try {
            if(alunoId === '0') {
                await api.post(`api/alunos`, data, authorization);
            } else {
                data.id = id;
                await api.put(`api/alunos/${id}`, data, authorization);
            }
        } catch(erro) {
            alert("Erro ao gravar aluno " + erro);
        }
        history.push('/alunos');
    }
    
    return (
        <div className='novo-aluno-container'>
            <div className='content'>
                <section className='form'>
                    <FiUserPlus size='105' color='#17202a' />
                    <h1>{alunoId === '0' ? 'Incluir Novo Aluno' : 'Atualizar Aluno'}</h1>
                    <Link className='back-link' to='/alunos'>
                        <FiCornerDownLeft size='25' color='#17202a' />
                        Retornar
                    </Link>
                </section>
                <form onSubmit={saveOrUpdate}>
                    <input placeholder='Nome' value={nome} onChange={e => SetNome(e.target.value)} />
                    <input placeholder='Email' value={email} onChange={e => SetEmail(e.target.value)} />
                    <input placeholder='Idade' value={idade} onChange={e => SetIdade(e.target.value)} />
                    <button className='button button-green' type='submit'>
                        {alunoId === '0' ? 'Incluir' : 'Atualizar'}
                    </button>
                </form>
            </div>
        </div>
    );
}