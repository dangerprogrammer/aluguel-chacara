import styles from './LoginContent.module.scss';

const metadata = {
    title: 'Faça login para prosseguir'
};

function LoginContent() {
    const {loginContent} = styles;

    return <div className={loginContent}>
        <main>
            <h1>Faça login para acessar outras guias</h1>
            <span id="loginButton"></span>
        </main>
    </div>
};

export {metadata};

export default LoginContent;