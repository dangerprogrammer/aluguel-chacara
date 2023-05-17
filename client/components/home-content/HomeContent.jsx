import { useState } from 'react';
import Navbar from '../navbar/Navbar';
import SidebarUser from '../sidebar-user/SidebarUser';
import styles from './HomeContent.module.scss';
import { useRouter } from 'next/router';
import Head from 'next/head';
Head
function HomeContent({users, socket, setLogin}) {
    const {homeContent} = styles, anotherUsers = users.filter(user => user.id != socket.id), you = users.find(user => user.id == socket.id),
        [sideuser, setSideuser] = useState(!1),
        userArgs = {you, anotherUsers}, navArgs = {setSideuser}, sideArgs = {sideuser, setSideuser, socket, setLogin},
        {pathname} = useRouter(), titlePathname = pathname.charAt(1).toUpperCase() + pathname.slice(2);

    if (!socket || !you || !you.userData) return;

    return <>
    <Head>
      <title>Chácara | {titlePathname || 'Home'}</title>
    </Head>
    <main className={homeContent}>
        <Navbar {...userArgs} {...navArgs}/>
        <SidebarUser {...userArgs} {...sideArgs}/>
    </main>
    </>
};

export default HomeContent;