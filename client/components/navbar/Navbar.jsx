import Image from 'next/image';
import styles from './Navbar.module.scss';

function Navbar({user}) {
    const {navbar, userImage, logOut} = styles, {name, given_name, email, picture} = user;

    function logOutFunction() {};

    return <nav className={navbar}>
        <main>
            <button className={userImage}>
                <Image src={picture} height={64} width={64} alt={`Foto de ${name}`}/>
            </button>
            <button className={logOut} onClick={logOutFunction}>
                <span>Sair</span>
                <ion-icon name="log-out-outline"></ion-icon>
            </button>
        </main>
    </nav>
};

export default Navbar;