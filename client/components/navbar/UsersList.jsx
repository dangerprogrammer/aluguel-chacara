function UsersList({usersList}) {
    if (!usersList) return;
    return usersList.length > 5 ? [...usersList.filter((user, ind) => ind < 5), {content: `+${usersList.length - 5}`}].map(({userData}, ind) => (
        <li key={ind}></li>
    )) : usersList.map(({userData}, ind) => (
        <li key={ind}></li>
    ));
};

export default UsersList;