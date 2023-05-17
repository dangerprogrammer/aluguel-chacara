import authUsers from "@/scripts/authorizedUsers";
import io from 'socket.io-client';

function responseLogin(response, parentButton, googleLoginButton, socket, setSocket, setUsers) {
    const data = jwt_decode(response.credential), {email} = data, hasEmail = !!authUsers.find(authUser => authUser === email);

    if (!hasEmail) return;

    if (!localStorage.getItem('user-data') && !socket) {
        loadSocket(socket, setSocket, setUsers);

        localStorage.setItem('user-data', JSON.stringify(data));
    
        parentButton.removeChild(googleLoginButton);
    } else if (socket) {
        localStorage.setItem('user-data', JSON.stringify(data));

        parentButton.removeChild(googleLoginButton);
        socket.connected = !0;

        socket.emit('user-data', JSON.parse(localStorage.getItem('user-data')));
    };
};

async function loadSocket(socket, setSocket, setUsers) {
    if (socket) return;

    socket = await io.connect('http://localhost:3001');

    receiveSockets(socket, setUsers);
    setSocket(socket);

    return socket;
};

export {loadSocket};

function receiveSockets(socket, setUsers) {
    socket.on('connect', () => {
        console.log(`Socket ${socket.id} conectado!`);
        socket.emit('user-data', JSON.parse(localStorage.getItem('user-data')));

        socket.on('update-users', usersList => setUsers(usersList));
    });
};

function initializeLogin(parentButton, googleLoginButton, socket, setSocket, setUsers) {
    const {initialize, renderButton, prompt} = google.accounts.id,
        buttonStyles = {type: "standard", shape: "pill", theme: "filled_black", text: "AAAAAAAAAAAAAAAAAAAAAAAA", size: "large", logo_alignment: "left"};

    initialize({
        client_id: "51626388269-udorhoviviu1ppa5163bvjj9k6cbhkaj.apps.googleusercontent.com",
        callback: response => responseLogin(response, parentButton, googleLoginButton, socket, setSocket, setUsers)
    });

    renderButton(googleLoginButton, buttonStyles);

    prompt();
};

export default initializeLogin;