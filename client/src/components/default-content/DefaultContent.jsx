import Navbar from '../navbar/Navbar';
import SidebarUser from '../sidebar-user/SidebarUser';
import { defaultContent } from './DefaultContent.module.scss';

function DefaultContent({users, socket, setLogin, children}) {
    const anotherUsers = users.filter(user => user.id != socket.id), you = users.find(user => user.id == socket.id),
        userArgs = {you, anotherUsers}, sideArgs = {socket, setLogin};

    if (!socket || !you || !you.userData) return;

    return <main className={defaultContent}>
        <Navbar {...userArgs}/>
        <SidebarUser {...userArgs} {...sideArgs}/>
        {children}
    </main>
};

export default DefaultContent;