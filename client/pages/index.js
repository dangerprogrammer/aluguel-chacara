import HomeContent from "@/components/home-content/HomeContent";
import authUsers from "@/scripts/authorizedUsers";
import Head from "next/head";
import { useState, useEffect } from "react";
import io from 'socket.io-client';

function Home() {
  const [socket, setSocket] = useState(null),
    homeArgs = {socket, setSocket};

  useEffect(() => {
    const googleLoginButton = document.createElement('div'),
      parentButton = document.querySelector('#__next');

    googleLoginButton.id = '#googleLoginButton';

    const hasButton = [...parentButton.children].find(child => child.id === googleLoginButton.id);

    if (!hasButton) parentButton.appendChild(googleLoginButton);

    const {initialize, renderButton, prompt} = google.accounts.id,
        buttonStyles = {type: "standard", shape: "pill", theme: "filled_black", text: "signin.", size: "large", logo_alignment: "left"};

    initialize({
        client_id: "51626388269-udorhoviviu1ppa5163bvjj9k6cbhkaj.apps.googleusercontent.com",
        callback: response => responseLogin(response, setSocket)
    });

    renderButton(googleLoginButton, buttonStyles);

    prompt();
  }, []);

  return <>
  <Head>
    <title>Aluguel da Chácara</title>
  </Head>
  <HomeContent {...homeArgs}/>
  </>
};

function responseLogin(response) {
  const data = jwt_decode(response.credential), {email} = data, hasEmail = !!authUsers.find(authUser => authUser === email);

  if (hasEmail) loadSocket(socket, setSocket);
};

async function loadSocket(socket, setSocket) {
  return console.log("carregar socket");

  socket ||= await io.connect('http://localhost:3001');

  setSocketProps(socket);

  setSocket(socket);
};

function setSocketProps(socket) {
  socket;
};

export default Home;