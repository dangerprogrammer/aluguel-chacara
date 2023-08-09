'use client';

import CalendarContent from "@/components/calendar-content/CalendarContent";
import {ContextApp} from "@/components/context/ContextApp";
import DefaultContent from "@/components/default-content/DefaultContent";
import LoginContent from "@/components/login-content/LoginContent";
import afterWindowLoaded from "@/scripts/afterWindowLoaded";
import { useContext } from "react";

function Home() {
  const {socket, setSocket, login, setLogin, users, setUsers} = useContext(ContextApp),
    defaultArgs = {users, socket, setLogin},
    calendarArgs = {users, socket},
    metaDados = {login, setLogin, socket, setSocket, setUsers, firstEmmit: !0};

  setTimeout(() => typeof window !== 'undefined' && afterWindowLoaded(metaDados), 10);

  return login ? <DefaultContent {...defaultArgs}>
    <CalendarContent {...calendarArgs}/>
  </DefaultContent> : <LoginContent/>
};

export default Home;