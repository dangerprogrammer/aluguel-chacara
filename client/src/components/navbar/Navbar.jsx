import Image from 'next/image';
import styles from './Navbar.module.scss';
import UsersList from './UsersList';
import { useContext } from "react";
import { ContextApp } from '../context/ContextApp';

function Navbar(props) {
    return <>
    <NavbarComponent {...props}/>
    <NavbarComponent {...props} shadow/>
    </>
};

function NavbarComponent({you, anotherUsers, shadow}) {
    const {navbar, userImage, usersList, shadowNav} = styles;

    const {picture, name} = you.userData;
    const {setSideuser} = useContext(ContextApp);

    return <>
    <nav className={`${navbar} ${shadow ? shadowNav : ''}`}>
        <main>
            <button className={userImage}  onClick={() => setSideuser(!0)}>
                <Image src={picture} height={64} width={64} alt={`Foto de ${name}`}/>
            </button>
            <ul className={usersList}>
                <UsersList usersList={anotherUsers}/>
            </ul>
        </main>
    </nav>
    </>
};

export default Navbar;