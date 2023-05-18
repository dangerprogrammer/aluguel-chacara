import styles from './HomeContent.module.scss';
import {ContextApp} from "@/components/context/ContextApp";
import { useRouter } from 'next/router';
import { useContext } from "react";

function HomeContent({users, socket}) {
    const {homeContent, homeTitle, gridPages} = styles, you = users.find(user => user.id == socket.id);
    const {push} = useRouter();

    if (!socket || !you || !you.userData) return;

    const {picture, email/*, given_name*/, name} = you.userData;
    const {routes} = useContext(ContextApp);

    return <main className={homeContent}>
        <header>
            <h1 className={homeTitle}>Olá <bolder>{name}</bolder>, seja muito bem-vindo(a)! 👋👋</h1>
            <h3>Para ver mais conteúdos, acesse uma das páginas abaixo, ou clicando na foto do seu perfil!</h3>
        </header>
        <section className={gridPages}>
            {routes.map(({text, path, iconName, descPath}, ind) => <div key={ind} onClick={() => push(path)}>
                <h1>
                    <ion-icon name={iconName}></ion-icon>
                    <span>{text}</span>
                </h1>
                <p>{descPath}</p>
            </div>)}
        </section>
    </main>
};

export default HomeContent;