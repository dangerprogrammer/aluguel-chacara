'use client';

import {ContextApp} from "@/components/context/ContextApp";
import DefaultContent from "@/components/default-content/DefaultContent";
import LoginContent from "@/components/login-content/LoginContent";
import afterWindowLoaded from "@/scripts/afterWindowLoaded";
import { useContext } from "react";

function Home() {
  const {socket, setSocket, login, setLogin, users, setUsers} = useContext(ContextApp),
    metaDados = {login, setLogin, socket, setSocket, setUsers, firstEmmit: !0};

  setTimeout(() => window && afterWindowLoaded(metaDados), 10);

  return login ? <DefaultContent users={users} socket={socket} setLogin={setLogin}/> : <LoginContent/>
};

export default Home;