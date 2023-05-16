import Image from 'next/image';
import styles from './Navbar.module.scss';
import UsersList from './UsersList';

function Navbar({you, anotherUsers, setSideuser}) {
    const {navbar, userImage, logOut, usersList} = styles;

    const {picture/*, email, given_name*/, name} = you.userData;

    function logOutFunction() {};

    return <nav className={navbar}>
        <main>
            <button className={userImage}  onClick={() => setSideuser(!0)}>
                <Image src={picture} height={64} width={64} alt={`Foto de ${name}`}/>
            </button>
            {/* <button className={logOut} onClick={logOutFunction}>
                <span>Sair</span>
                <ion-icon name="log-out-outline"></ion-icon>
            </button> */}
            <ul className={usersList}>
                <UsersList usersList={anotherUsers}/>
            </ul>
        </main>
    </nav>
};

export default Navbar;