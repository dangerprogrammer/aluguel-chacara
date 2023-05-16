import HomeContent from "@/components/home-content/HomeContent";
import LoginContent from "@/components/login-content/LoginContent";
import initializeLogin, {loadSocket} from "@/scripts/initializeLogin";
import Head from "next/head";
import { useState } from "react";

function Home() {
  const [socket, setSocket] = useState(null),
    [login, setLogin] = useState(!1),
    [users, setUsers] = useState([]),
    metaDados = {login, setLogin, socket, setSocket, setUsers, firstEmmit: !0};

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

  if (metaDados.firstEmmit == !1) return;

  if (!login && socket) return setSocket(null);

  const hasLogged = localStorage.getItem('user-data'),
      googleLoginButton = document.createElement('div'),
      parentButton = document.querySelector('#loginButton');

    if (!parentButton) return;
    if (hasLogged) {
      setLogin(!!hasLogged);

      if (!socket) {
        console.log("já havia login! conectando...");
        loadSocket(socket, setSocket, setUsers);
      };
    };

    googleLoginButton.id = 'googleLoginButton';

    const hasButton = [...parentButton.children].find(child => child.id === googleLoginButton.id);

    if (!hasButton) parentButton.appendChild(googleLoginButton);

    initializeLogin(parentButton, googleLoginButton, socket, setSocket, setUsers);
    metaDados.firstEmmit = !1;
};

export default Home;