import styles from './UsersList.module.scss';
import Image from "next/image";

function UsersList({usersList}) {
    const {userContainer, plusContent} = styles, sizePicture = 40;

    if (!usersList.length || !usersList[usersList.length - 1].userData) return;

    function UserComponent({picture, name}) {
        return <div>
            <Image src={picture} height={sizePicture} width={sizePicture} alt={`Foto de ${name}`}/>
        </div>
    };

    return usersList.length > 5 ? [...usersList.filter((user, ind) => ind < 4), {content: `+${usersList.length - 4}`}].map(({userData, content}, ind) => (
        <li key={ind} style={{'--ind': usersList.length - ind, '--index': ind}} className={`${userContainer} ${content ? plusContent : ''}`}>
            {content ? <span>
                {content}
            </span> : <UserComponent picture={userData.picture} name={userData.name}/>}
            
        </li>
    )) : usersList.map(({userData}, ind) => (
        <li key={ind} style={{'--ind': usersList.length - ind, '--index': ind}} className={userContainer}>
            <UserComponent picture={userData.picture} name={userData.name}/>
        </li>
    ));
};

export default UsersList;