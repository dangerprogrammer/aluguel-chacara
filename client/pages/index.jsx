import HomeContent from "@/components/home-content/HomeContent";
import LoginContent from "@/components/login-content/LoginContent";
import initializeLogin, {loadSocket} from "@/scripts/initializeLogin";
import Head from "next/head";
import { useState } from "react";

function Home() {
  const [socket, setSocket] = useState(null),
    [login, setLogin] = useState(!1),
    [users, setUsers] = useState([]),
    metaDados = {login, setLogin, socket, setSocket, setUsers};

  setTimeout(() => {
    if (window != undefined) {
      afterWindowLoaded(metaDados);
    };
  }, 10);

  return login ? <>
  <Head>
    <title>Chácara - Home</title>
  </Head>
  <HomeContent users={users} socket={socket} setLogin={setLogin}/>
  </> : <>
  <Head>
    <title>Faça login para prosseguir</title>
  </Head>
  <LoginContent/>
  </>
};

function afterWindowLoaded(metaDados) {
  const {login, setLogin, socket, setSocket, setUsers} = metaDados;

  if (!login && socket && socket.connected) {
    socket.connected = !1;
    return console.log('houve logout! desconectando...', socket);
  };

  const hasLogged = localStorage.getItem('user-data'),
      googleLoginButton = document.createElement('div'),
      parentButton = document.querySelector('#loginButton');

    if (!parentButton) return;
    if (hasLogged && (!socket || !socket.connected)) {
      setLogin(!!hasLogged);
      if (!socket) loadSocket(socket, setSocket, setUsers);

      if (socket && !socket.connected) {
        socket.connected = !0;
        console.log('havia login! reconectando...', socket);
      };
    };

    googleLoginButton.id = 'googleLoginButton';

    const hasButton = [...parentButton.children].find(child => child.id === googleLoginButton.id);

    if (!hasButton) parentButton.appendChild(googleLoginButton);

    initializeLogin(parentButton, googleLoginButton, socket, setSocket, setUsers);
};

export default Home;