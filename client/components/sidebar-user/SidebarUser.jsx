import Image from 'next/image';
import styles from './SidebarUser.module.scss';

function SidebarUser({you, anotherUsers, sideuser, setSideuser}) {
    const {sidebar, shadowOutside, show, hide, userInfo, userImage} = styles;
    const {picture/*, email, given_name*/, name} = you.userData;

    return <aside className={`${sidebar} ${sideuser ? show : hide}`}>
        <main>
            <div className={userInfo}>
                <button className={userImage}  onClick={() => setSideuser(!0)}>
                    <Image src={picture} height={64} width={64} alt={`Foto de ${name}`}/>
                </button>
                <span>Opa</span>
            </div>
        </main>
        <span className={shadowOutside} onClick={() => setSideuser(!1)}></span>
    </aside>
};

export default SidebarUser;