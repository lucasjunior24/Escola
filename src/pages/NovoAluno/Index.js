import { FiUserPlus, FiCornerDownLeft } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import './Styles.css';

export default function NovoAluno() {
    const {alunoId} = useParams();
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
                <form>
                    <input placeholder='Nome' />
                    <input placeholder='Email' />
                    <input placeholder='Idade' />
                    <button className='button button-green' type='submit'>
                        {alunoId === '0' ? 'Incluir Novo Aluno' : 'Atualizar Aluno'}
                    </button>
                </form>
            </div>
        </div>
    );
}