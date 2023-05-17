import { useState, createContext } from 'react';

const ContextApp = createContext();

function ContextProvider({children}) {
    const [socket, setSocket] = useState(null),
        [login, setLogin] = useState(!1),
        [users, setUsers] = useState([]),
        values = {socket, setSocket, login, setLogin, users, setUsers};

    return <ContextApp.Provider value={values}>
        {children}
    </ContextApp.Provider>
};

export default ContextProvider;

export {ContextApp};