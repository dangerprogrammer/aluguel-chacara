import styles from './HomeContent.module.scss';

function HomeContent({users, socket}) {
    const {homeContent} = styles, anotherUsers = users.filter(user => user.id != socket.id), you = users.find(user => user.id == socket.id);

    if (!socket || !you || !you.userData) return;

    const {picture, email/*, given_name*/, name} = you.userData;

    return <main className={homeContent}>
        <h1>Olá {name}!</h1>
    </main>
};

export default HomeContent;