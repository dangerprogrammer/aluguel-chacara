import HomeContent from "@/components/home-content/HomeContent";
import LoginContent from "@/components/login-content/LoginContent";
import authUsers from "@/scripts/authorizedUsers";
import Head from "next/head";
import { useState, useEffect } from "react";
import io from 'socket.io-client';

function Home() {
  const [socket, setSocket] = useState(null),
    [users, setUsers] = useState([]);

  let firstEmmit = !0;

  useEffect(() => {
    const hasLogged = localStorage.getItem('user-data'),
      googleLoginButton = document.createElement('div'),
      parentButton = document.querySelector('#loginButton');

    if (!parentButton) return;
    if (hasLogged && !socket && firstEmmit) {
      loadSocket(socket);
      firstEmmit = !1;
    };

    googleLoginButton.id = 'googleLoginButton';

    const hasButton = [...parentButton.children].find(child => child.id === googleLoginButton.id);

    if (!hasButton) parentButton.appendChild(googleLoginButton);

    const {initialize, renderButton, prompt} = google.accounts.id,
        buttonStyles = {type: "standard", shape: "pill", theme: "filled_black", text: "AAAAAAAAAAAAAAAAAAAAAAAA", size: "large", logo_alignment: "left"};

    initialize({
        client_id: "51626388269-udorhoviviu1ppa5163bvjj9k6cbhkaj.apps.googleusercontent.com",
        callback: response => responseLogin(response, parentButton, googleLoginButton)
    });

    renderButton(googleLoginButton, buttonStyles);

    prompt();
  }, []);

  function responseLogin(response, parentButton, googleLoginButton) {
    const data = jwt_decode(response.credential), {email} = data, hasEmail = !!authUsers.find(authUser => authUser === email);
  
    if (hasEmail && !localStorage.getItem('user-data') && !socket) {
      loadSocket(socket);
      console.log("loadSocket 2");

      localStorage.setItem('user-data', JSON.stringify(data));

      parentButton.removeChild(googleLoginButton);
    };
  };
  
  async function loadSocket(socket) {
    if (socket) return socket;

    socket = await io.connect('http://localhost:3001');
  
    receiveSockets(socket);
    setSocket(socket);

    return socket;
  };

  function receiveSockets(socket) {
    socket.on('connect', () => {
      console.log(`Socket ${socket.id} conectado!`);
      socket.emit('user-data', JSON.parse(localStorage.getItem('user-data')));

      socket.on('update-users', usersList => setUsers(usersList));
    });
  };

  return socket ? <>
  <Head>
    <title>Chácara - Home</title>
  </Head>
  <HomeContent userID={socket.id} users={users}/>
  </> : <>
  <Head>
    <title>Faça login para prosseguir</title>
  </Head>
  <LoginContent/>
  </>
};

export default Home;