import HomeContent from "@/components/home-content/HomeContent";
import Head from "next/head";
import Script from "next/script";
import { useState, useEffect } from "react";

function Home() {
  const [socket, setSocket] = useState(null),
    homeArgs = {socket, setSocket};

  useEffect(() => {
    const body = document.querySelector('body'),
      parentButton = document.querySelector('#__next'),
      googleLoginButton = document.createElement('div'),
      googleLogin = document.createElement('script'),
      hasButton = [...parentButton.children].find(child => child.id == 'googleLoginButton');

    googleLoginButton.id = 'googleLoginButton';
    googleLogin.src = '/tools/googleLogin.js';
    if (!hasButton) {
      parentButton.append(googleLoginButton);
      body.append(googleLogin);
    };
  }, []);

  return <>
  <Head>
    <title>Aluguel da Chácara</title>
  </Head>
  <HomeContent {...homeArgs}/>
  </>
};

export default Home;