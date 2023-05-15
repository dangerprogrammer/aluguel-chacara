import Navbar from '../navbar/Navbar';
import styles from './HomeContent.module.scss';

function HomeContent({userID, users}) {
    const {homeContent} = styles, anotherUsers = users.filter(user => user.id != userID), you = users.find(user => user.id == userID), navArgs = {you, anotherUsers};

    return <main className={homeContent}>
        <Navbar {...navArgs}/>
    </main>
};

export default HomeContent;