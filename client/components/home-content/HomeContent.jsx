import Navbar from '../navbar/Navbar';
import styles from './HomeContent.module.scss';

function HomeContent({userID, users}) {
    const {homeContent} = styles, navArgs = {userID, users};

    return <main className={homeContent}>
        <Navbar {...navArgs}/>
    </main>
};

export default HomeContent;