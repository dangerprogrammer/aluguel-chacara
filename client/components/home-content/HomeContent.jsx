import { useState } from 'react';
import Navbar from '../navbar/Navbar';
import SidebarUser from '../sidebar-user/SidebarUser';
import styles from './HomeContent.module.scss';

function HomeContent({users, socket, setLogin}) {
    const {homeContent} = styles, anotherUsers = users.filter(user => user.id != socket.id), you = users.find(user => user.id == socket.id),
        [sideuser, setSideuser] = useState(!0),
        userArgs = {you, anotherUsers}, navArgs = {setSideuser}, sideArgs = {sideuser, setSideuser, socket, setLogin};

    if (!socket || !you || !you.userData) return;

    return <main className={homeContent}>
        <Navbar {...userArgs} {...navArgs}/>
        <SidebarUser {...userArgs} {...sideArgs}/>
    </main>
};

export default HomeContent;