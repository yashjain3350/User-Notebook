import React from 'react';

import Card from '../UI/Card';

import classes from './UsersList.module.css';

const UsersLists = props => {
    let content = <p className={classes.noUsers}>No Users Found!!</p>

    if (props.users.length > 0) {
        content = (
            <Card className={classes.users}>
                <ul>
                    {props.users.map(user => <li key={user.id}>{user.name} ({user.age} years old.)</li>)}
                </ul>
            </Card>
        );
    }

    return content;
}

export default UsersLists;