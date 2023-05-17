import {ContextApp} from "@/components/context/ContextApp";
import DefaultContent from "@/components/default-content/DefaultContent";
import HomeContent from "@/components/home-content/HomeContent";
import LoginContent from "@/components/login-content/LoginContent";
import afterWindowLoaded from "@/scripts/afterWindowLoaded";
import Head from "next/head";
import { useContext } from "react";

function Home() {
  const {socket, setSocket, login, setLogin, users, setUsers} = useContext(ContextApp),
    defaultArgs = {users, socket, setLogin},
    homeArgs = {users, socket},
    metaDados = {login, setLogin, socket, setSocket, setUsers, firstEmmit: !0};

    setTimeout(() => typeof window != null && afterWindowLoaded(metaDados), 10);

  return login ? <>
    <DefaultContent {...defaultArgs}>
      <HomeContent {...homeArgs}/>
    </DefaultContent>
  </> : <>
    <Head>
      <title>Faça login para prosseguir</title>
    </Head>
    <LoginContent/>
  </>
};

export default Home;