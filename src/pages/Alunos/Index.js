import { Link } from 'react-router-dom';
import { FiEdit, FiUserX, FiXCircle } from 'react-icons/fi';
import './Styles.css';

export default function Alunos() {
    return (
        <div className='aluno-container'>
            <header>
                <span>Bem Vindo, <strong>Lucas</strong>!</span>
                <Link to='aluno/novo' className='button button-green'>Novo Aluno</Link>
                <button type='button'>
                    <FiXCircle size={35} color="#17202a" />
                </button>
            </header>
            <form>
                <input type='text' placeholder='Nome' />
                <button type='button' className='button button-green'>
                    Filtro
                </button>
            </form>
            <h1>Relação de alunos</h1>
            <ul>
                <li>
                    <b>Nome: </b>Paulo<br /><br />
                    <b>Email: </b>Paulo<br /><br />
                    <b>Idade: </b>Paulo<br /><br />
                    <button type='button'>
                        <FiEdit size='25' color="#17202a" />
                    </button>
                    <button type='button'>
                        <FiUserX size='25' color="#17202a" />
                    </button>
                </li>

                <li>
                    <b>Nome: </b>Paulo<br /><br />
                    <b>Email: </b>Paulo<br /><br />
                    <b>Idade: </b>Paulo<br /><br />
                    <button type='button'>
                        <FiEdit size='25' color="#17202a" />
                    </button>
                    <button type='button'>
                        <FiUserX size='25' color="#17202a" />
                    </button>
                </li>
            </ul>
        </div>
    );
}