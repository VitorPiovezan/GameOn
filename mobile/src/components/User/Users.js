import React from 'react';
import User from './User';

const Users = (props) => props.users.map((user, index) => {
    return <User
            //photoURL={i don't know}
            username={user.username}
            userdescription={user.userdescription}
            like={() => like(event, user.id)}
            dislike={() => dislike(event, user.id)}
    />
})

export default Users;