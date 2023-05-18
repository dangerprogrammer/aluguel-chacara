import CalendarContent from "@/components/calendar-content/CalendarContent";
import {ContextApp} from "@/components/context/ContextApp";
import DefaultContent from "@/components/default-content/DefaultContent";
import Redirect from "@/components/redirect/Redirect";
import afterWindowLoaded from "@/scripts/afterWindowLoaded";
import { useContext } from "react";

function Calendar() {
  const {socket, setSocket, login, setLogin, users, setUsers} = useContext(ContextApp),
    defaultArgs = {users, socket, setLogin},
    calendarArgs = {users, socket},
    metaDados = {login, setLogin, socket, setSocket, setUsers, firstEmmit: !0};

  setTimeout(() => typeof window != null && afterWindowLoaded(metaDados), 10);

  return login ? <DefaultContent {...defaultArgs}>
    <CalendarContent {...calendarArgs}/>
  </DefaultContent> : <Redirect to="/"/>
};

export default Calendar;