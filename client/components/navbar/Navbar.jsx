import Image from 'next/image';
import styles from './Navbar.module.scss';

function Navbar({socket, user, users}) {
    const {navbar, userImage, logOut, usersList} = styles, {name, given_name, email, picture} = user, anotherUsers = users.filter(user => user.id != socket.id);

    console.log(email, anotherUsers);

    function logOutFunction() {};

    return <nav className={navbar}>
        <main>
            <button className={userImage}>
                <Image src={picture} height={64} width={64} alt={`Foto de ${name}`}/>
            </button>
            {/* <button className={logOut} onClick={logOutFunction}>
                <span>Sair</span>
                <ion-icon name="log-out-outline"></ion-icon>
            </button> */}
            <ul className={usersList}>
                {users.filter(user => user.id != socket.id).map(({userData}, ind) => userData && <li key={ind}>
                    <Image src={userData.picture} height={64} width={64} alt={`Foto de ${userData.name}`}/>
                </li>)}
            </ul>
        </main>
    </nav>
};

export default Navbar;