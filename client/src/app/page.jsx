import {ContextApp} from "@/components/context/ContextApp";
import DefaultContent from "@/components/default-content/DefaultContent";
import HomeContent from "@/components/home-content/HomeContent";
import LoginContent from "@/components/login-content/LoginContent";
import afterWindowLoaded from "@/scripts/afterWindowLoaded";
import { useContext } from "react";

const metadata = {};

function Home() {
  const {socket, setSocket, login, setLogin, users, setUsers} = useContext(ContextApp),
    defaultArgs = {users, socket, setLogin},
    homeArgs = {users, socket},
    metaDados = {login, setLogin, socket, setSocket, setUsers, firstEmmit: !0};

    if (!login) metadata.title = 'Faça login para prosseguir';

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

export {metadata};

export default Home;