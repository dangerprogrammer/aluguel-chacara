import { loginContent } from './LoginContent.module.scss';

function LoginContent() {
    document.title = 'Faça login para prosseguir';

    return <div className={loginContent}>
        <main>
            <h1>Faça login para acessar outras guias</h1>
            <span id="loginButton"></span>
        </main>
    </div>
};

export default LoginContent;