import HomeContent from "@/components/home-content/HomeContent";
import Head from "next/head";
import { useState } from "react";

function Home() {
  const [socket, setSocket] = useState(null),
    homeArgs = {socket, setSocket};

  return <>
  <Head>
    <title>Aluguel da Chácara</title>
  </Head>
  <HomeContent {...homeArgs}/>
  </>
};

export default Home;