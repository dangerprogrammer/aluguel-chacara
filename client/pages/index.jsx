import HomeContent from "@/components/home-content/HomeContent";
import LoginContent from "@/components/login-content/LoginContent";
import initializeLogin, {loadSocket} from "@/scripts/initializeLogin";
import Head from "next/head";
import { useState, useLayoutEffect } from "react";

function Home() {
  const [socket, setSocket] = useState(null),
    [login, setLogin] = useState(!1),
    [users, setUsers] = useState([]),
    metaDados = {login, setLogin, socket, setSocket, setUsers, firstEmmit: !0};

  let first = !0;
  useLayoutEffect(() => {
    console.log("layout effect!", first);

    first = !1;
  }, []);

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
    return console.log('houve logout! desconectando...', socket.id);
  };

  const hasLogged = localStorage.getItem('user-data'),
      googleLoginButton = document.createElement('div'),
      parentButton = document.querySelector('#loginButton');

    if (!parentButton) return;
    if (hasLogged) {
      setLogin(!!hasLogged);
      
      if (!socket) {
        console.log('havia login! criando...', metaDados.firstEmmit);
        loadSocket(socket, setSocket, setUsers);
      } else if (!socket.connected) {
        socket.connected = !0;
        console.log('havia login! reconectando...', socket.id);
      };
    };

    googleLoginButton.id = 'googleLoginButton';

    const hasButton = [...parentButton.children].find(child => child.id === googleLoginButton.id);

    if (!hasButton) parentButton.appendChild(googleLoginButton);

    initializeLogin(parentButton, googleLoginButton, socket, setSocket, setUsers);

    metaDados.firstEmmit = !1;
};

export default Home;