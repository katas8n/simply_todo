import React from 'react';

import styled from './User.module.css';

const User = ({ children }) => {
    return <div className={styled.user}>{children}</div>;
};

export default User;
