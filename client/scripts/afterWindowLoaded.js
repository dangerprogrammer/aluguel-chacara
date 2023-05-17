import initializeLogin, {loadSocket} from "@/scripts/initializeLogin";

function afterWindowLoaded(metaDados) {
    const {login, setLogin, socket, setSocket, setUsers} = metaDados;

    if (!login && socket && socket.connected) return socket.connected = !1;

    const hasLogged = localStorage.getItem('user-data'),
        googleLoginButton = document.createElement('div'),
        parentButton = document.querySelector('#loginButton');

    if (!parentButton) return;
    if (hasLogged) {
        setLogin(!!hasLogged);

        if (!socket) loadSocket(socket, setSocket, setUsers);
        else if (!socket.connected) socket.connected = !0;
    };

    googleLoginButton.id = 'googleLoginButton';

    const hasButton = [...parentButton.children].find(child => child.id === googleLoginButton.id);

    if (!hasButton) parentButton.appendChild(googleLoginButton);

    initializeLogin(parentButton, googleLoginButton, socket, setSocket, setUsers);

    metaDados.firstEmmit = !1;
};

export default afterWindowLoaded;