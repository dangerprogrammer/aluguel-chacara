import HomeContent from "@/components/home-content/HomeContent";
import Head from "next/head";
import Script from "next/script";
import { useState, useEffect } from "react";

function Home() {
  const [socket, setSocket] = useState(null),
    homeArgs = {socket, setSocket};

  useEffect(() => {
    const googleLoginButton = document.querySelector('#googleLoginButton'),
      parentButton = document.querySelector('#__next');

    parentButton.appendChild(googleLoginButton);
  }, []);

  return <>
  <Head>
    <title>Aluguel da Chácara</title>
  </Head>
  <HomeContent {...homeArgs}/>
  </>
};

export default Home;