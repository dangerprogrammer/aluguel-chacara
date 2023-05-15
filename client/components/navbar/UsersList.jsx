import styles from './UsersList.module.scss';
import Image from "next/image";

function UsersList({usersList}) {
    const {userContainer, plusContent} = styles, sizePicture = 40;

    if (!usersList) return;

    function UserComponent(picture, name) {
        return <div>
            <Image src={userData.picture} height={sizePicture} width={sizePicture} alt={`Foto de ${userData.name}`}/>
        </div>
    };

    return usersList.length > 5 ? [...usersList.filter((user, ind) => ind < 4), {content: `+${usersList.length - 4}`}].map(({userData, content}, ind) => (
        <li key={ind} style={{'--ind': usersList.length - ind, '--index': ind}} className={`${userContainer} ${content ? plusContent : ''}`} onClick={() => {}}>
            {content ? <span>
                {content}
            </span> : <div>
                <Image src={userData.picture} height={sizePicture} width={sizePicture} alt={`Foto de ${userData.name}`}/>
            </div>}
            
        </li>
    )) : usersList.map(({userData}, ind) => (
        <li key={ind} style={{'--ind': usersList.length - ind, '--index': ind}} className={userContainer}>
            <div>
                <Image src={userData.picture} height={sizePicture} width={sizePicture} alt={`Foto de ${userData.name}`}/>
            </div>
        </li>
    ));
};

export default UsersList;