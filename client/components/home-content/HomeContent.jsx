import Navbar from '../navbar/Navbar';
import styles from './HomeContent.module.scss';

function HomeContent({socket, user}) {
    const {homeContent} = styles, navArgs = {socket, user};

    return <main className={homeContent}>
        <Navbar {...navArgs}/>
    </main>
};

export default HomeContent;