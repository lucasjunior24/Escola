import "./Login.css";

export default function Login() {
    return (
        <div className='main-login'>
            <div className='container-login'>
                <div className='login-left'>

                </div>
                <div className='login-rigth'>
                    <form>
                        <h1>Cadastro de Alunos</h1>
                        <input placeholder="Email" />
                        <input placeholder="Password" type='password' />
                        <button className="button button-green" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}