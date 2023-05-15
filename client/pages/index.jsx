import HomeContent from "@/components/home-content/HomeContent";
import authUsers from "@/scripts/authorizedUsers";
import Head from "next/head";
import { useState, useEffect } from "react";
import io from 'socket.io-client';

function Home() {
  const [socket, setSocket] = useState(null),
    homeArgs = {socket, setSocket};

  useEffect(() => {
    const hasLogged = localStorage.getItem('user-data'),
      googleLoginButton = document.createElement('div'),
      parentButton = document.querySelector('#__next');

    if (hasLogged) loadSocket(socket);

    googleLoginButton.id = 'googleLoginButton';

    const hasButton = [...parentButton.children].find(child => child.id === googleLoginButton.id);

    if (!hasButton && !hasLogged) parentButton.appendChild(googleLoginButton);

    const {initialize, renderButton, prompt} = google.accounts.id,
        buttonStyles = {type: "standard", shape: "pill", theme: "filled_black", text: "signin.", size: "large", logo_alignment: "left"};

    initialize({
        client_id: "51626388269-udorhoviviu1ppa5163bvjj9k6cbhkaj.apps.googleusercontent.com",
        callback: response => responseLogin(response, parentButton, googleLoginButton)
    });

    renderButton(googleLoginButton, buttonStyles);

    prompt();
  }, []);

  function responseLogin(response, parentButton, googleLoginButton) {
    const data = jwt_decode(response.credential), {email} = data, hasEmail = !!authUsers.find(authUser => authUser === email);
  
    if (hasEmail) {
      loadSocket(socket);

      localStorage.setItem('user-data', data);

      parentButton.removeChild(googleLoginButton);
    };
  };
  
  async function loadSocket(socket) {
    if (socket) return;

    socket = await io.connect('http://localhost:3001');
  
    setSocket(socket);
  };

  return socket ? <>
  <Head>
    <title>Chácara - Home</title>
  </Head>
  </> : <>
  <Head>
    <title>Fazer Login</title>
  </Head>
  <HomeContent {...homeArgs}/>
  </>
};

export default Home;