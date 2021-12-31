import React from 'react';

import Button from '../Button/Button';

import styled from './Error.module.css';

const Error = ({ title, message, closeModalHandler }) => {
    return (
        <>
            <div className={styled.backdrop}></div>
            <div className={styled.modal}>
                <header className={styled.header}>
                    <h2>{title}</h2>
                </header>
                <div className={styled.content}>
                    <p>{message}</p>
                </div>
                <footer className={styled.actions}>
                    <Button onClickHandler={closeModalHandler}>Okay</Button>
                </footer>
            </div>
        </>
    );
};

export default Error;
