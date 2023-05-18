import { useState, createContext } from 'react';

const ContextApp = createContext();

function ContextProvider({children}) {
    const [socket, setSocket] = useState(null),
        [login, setLogin] = useState(!1),
        [users, setUsers] = useState([]),
        routes = [
            {text: "Meus aluguéis", path: '/myRent', iconName: 'home-outline', descPath: 'Opa!'},
            {text: "Calendário", path: '/calendar', iconName: 'calendar-number-outline', descPath: 'Opa!'},
            {text: "Conversas", path: '/chats', iconName: 'chatbubbles-outline', descPath: 'Opa!'}
        ],
        [sideuser, setSideuser] = useState(!1),
        values = {socket, setSocket, login, setLogin, users, setUsers, routes, sideuser, setSideuser};

    return <ContextApp.Provider value={values}>
        {children}
    </ContextApp.Provider>
};

export default ContextProvider;

export {ContextApp};