import {ContextApp} from "@/components/context/ContextApp";
import DefaultContent from "@/components/default-content/DefaultContent";
import Redirect from "@/components/redirect/Redirect";
import afterWindowLoaded from "@/scripts/afterWindowLoaded";
import { useContext } from "react";

function Home() {
  const {socket, setSocket, login, setLogin, users, setUsers} = useContext(ContextApp),
    metaDados = {login, setLogin, socket, setSocket, setUsers, firstEmmit: !0};

  setTimeout(() => typeof window != null && afterWindowLoaded(metaDados), 10);

  return login ? <DefaultContent users={users} socket={socket} setLogin={setLogin}/> : <Redirect to="/"/>
};

export default Home;