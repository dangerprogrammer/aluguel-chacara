import Image from 'next/image';
import styles from './SidebarUser.module.scss';

function SidebarUser({you, anotherUsers, sideuser, setSideuser, setLogin}) {
    const {sidebar, shadowOutside, show, hide, userInfo, userImage, userDesc, userName, userEmail, listOptions, option, logout} = styles;
    const {picture, email/*, given_name*/, name} = you.userData;

    function logoutFunction() {
        localStorage.removeItem('user-data');

        setLogin(!1);
    };

    return <aside className={`${sidebar} ${sideuser ? show : hide}`}>
        <main>
            <div className={userInfo}>
                <button className={userImage}  onClick={() => setSideuser(!0)}>
                    <Image src={picture} height={64} width={64} alt={`Foto de ${name}`}/>
                </button>
                <span className={userDesc}>
                    <span className={userName}>{name}</span>
                    <span className={userEmail}>{email}</span>
                </span>
            </div>
            <hr/>
            <ul className={listOptions}>
                <li className={option}>
                    <ion-icon name="home-outline"></ion-icon>
                    <span>Meus aluguéis</span>
                </li>
                <li className={option}>
                    <ion-icon name="calendar-number-outline"></ion-icon>
                    <span>Calendário</span>
                </li>
                <li className={option}>
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                    <span>Conversas</span>
                </li>
            </ul>
            <hr/>
            <button className={logout} onClick={logoutFunction}>
                <span>Sair</span>
                <ion-icon name="log-out-outline"></ion-icon>
            </button>
        </main>
        <span className={shadowOutside} onClick={() => setSideuser(!1)}></span>
    </aside>
};

export default SidebarUser;