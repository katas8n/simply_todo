import React from 'react';

import styled from './Button.module.css';

const Button = ({ children, onClickHandler }) => {
    return (
        <button onClick={onClickHandler} className={styled.btn}>
            {children}
        </button>
    );
};

export default Button;
