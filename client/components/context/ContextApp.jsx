import { useState, createContext } from 'react';

const ContextApp = createContext();

function ContextProvider({children}) {
    const [socket, setSocket] = useState(null),
        [login, setLogin] = useState(!1),
        [users, setUsers] = useState([]),
        routes = [
            {text: "Meus aluguéis", path: '/myRent', iconName: 'home-outline', DescPath: ({given_name}) => `Página onde fica a lista dos aluguéis realizados por ${given_name}.`},
            {text: "Calendário", path: '/calendar', iconName: 'calendar-number-outline', DescPath: () => 'Visualização em tempo real do calendário da chácara e criação de novos aluguéis.'},
            {text: "Conversas", path: '/chats', iconName: 'chatbubbles-outline', DescPath: ({given_name}) => `Aqui é onde ficam as conversas de ${given_name} com outros usuários.`}
        ],
        [sideuser, setSideuser] = useState(!1),
        values = {socket, setSocket, login, setLogin, users, setUsers, routes, sideuser, setSideuser};

    return <ContextApp.Provider value={values}>
        {children}
    </ContextApp.Provider>
};

export default ContextProvider;

export {ContextApp};