import { homeContent, homeTitle, gridPages, routeButton } from './HomeContent.module.scss';
import { ContextApp } from "@/components/context/ContextApp";
import { useRouter } from 'next/navigation';
import { useContext } from "react";

function HomeContent({users, socket}) {
    const you = users.find(user => user.id == socket.id);
    const {push} = useRouter();

    if (!socket || !you || !you.userData) return;

    const {given_name} = you.userData;
    const {routes} = useContext(ContextApp);

    return <main className={homeContent}>
        <header>
            <h1 className={homeTitle}>Olá <span>{given_name}</span>, seja muito bem-vindo(a)! 👋👋</h1>
            <h3>Para ver mais conteúdos, acesse uma das páginas abaixo, ou clicando na foto do seu perfil!</h3>
        </header>
        <section className={gridPages}>
            {routes.map(({text, path, iconName, DescPath}, ind) => <div key={ind} onClick={() => push(path)} className={routeButton}>
                <h1>
                    <span><ion-icon name={iconName}></ion-icon></span>
                    {text}
                </h1>
                <p><DescPath given_name={given_name}/></p>
            </div>)}
        </section>
        <span></span>
        <span></span>
    </main>
};

export default HomeContent;