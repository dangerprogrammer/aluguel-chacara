import Image from 'next/image';
import { sidebar, shadowOutside, show, hide, userInfo, userImage, userDesc, userName, userEmail, listOptions, option, logout, activeOption } from './SidebarUser.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import { ContextApp } from "@/components/context/ContextApp";
import { useContext } from "react";

function SidebarUser({you, anotherUsers, setLogin}) {
    const {picture, email/*, given_name*/, name} = you.userData;
    const {push} = useRouter(), pathname = usePathname();
    const {routes, sideuser, setSideuser} = useContext(ContextApp);

    function logoutFunction() {
        localStorage.removeItem('user-data');

        setLogin(!1);
    };

    return <aside className={`${sidebar} ${sideuser ? show : hide}`}>
        <main>
            <div className={userInfo}>
                <div className={userImage}>
                    <Image src={picture} height={64} width={64} alt={`Foto de ${name}`}/>
                </div>
                <span className={userDesc}>
                    <span className={userName}>{name}</span>
                    <span className={userEmail}>{email}</span>
                </span>
            </div>
            <hr/>
            <ul className={listOptions}>
                {routes.map(({text, path, iconName}, ind) =>
                <li className={`${option} ${pathname === path ? activeOption : ''}`} onClick={() => push(path)} key={ind}>
                    <ion-icon name={iconName}></ion-icon>
                    <span>{text}</span>
                </li>)}
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