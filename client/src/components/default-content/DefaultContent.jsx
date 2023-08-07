import Navbar from '../navbar/Navbar';
import SidebarUser from '../sidebar-user/SidebarUser';
import styles from './DefaultContent.module.scss';
import { useRouter } from 'next/navigation';
import {ContextApp} from "@/components/context/ContextApp";
import { useContext } from "react";

const metadata = {};

function DefaultContent({users, socket, setLogin, children}) {
    const {defaultContent} = styles, anotherUsers = users.filter(user => user.id != socket.id), you = users.find(user => user.id == socket.id),
        userArgs = {you, anotherUsers}, sideArgs = {socket, setLogin},
        {pathname} = useRouter(), {routes} = useContext(ContextApp), findPathname = routes.find(({path}) => pathname == path),
        title = findPathname ? findPathname.text : 'Home';

    if (!socket || !you || !you.userData) return;

    metadata.title = `Chácara | ${title}`;

    return <main className={defaultContent}>
        <Navbar {...userArgs}/>
        <SidebarUser {...userArgs} {...sideArgs}/>
        {children}
    </main>
};

export {metadata};

export default DefaultContent;