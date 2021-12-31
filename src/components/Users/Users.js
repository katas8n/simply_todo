import React, { useState } from 'react';
import User from './User/User';

const Users = ({ users }) => {
    return (
        <div className="Users">
            {users.map((user, i) => {
                return (
                    <User key={i}>
                        <div >{user.name}</div>
                        <div>{user.age}</div>
                    </User>
                );
            })}
        </div>
    );
};

export default Users;
