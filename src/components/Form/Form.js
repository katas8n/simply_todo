import React, { useRef, useState } from 'react';

import { Input } from '../Input/Input';

import styled from './Form.module.css';

const Form = ({ addNewUserHandler }) => {
    const name = useRef('');
    const age = useRef('');

    const onSubmitHandler = e => {
        e.preventDefault();
        addNewUserHandler({
            name: name.current.value,
            age: age.current.value
        });
        name.current.value = '';
        age.current.value = '';
    };

    const inputs = [
        {
            name: name,
            type: 'text',
            ref: name
        },
        {
            name: age,
            type: 'number',
            ref: age
        }
    ];

    return (
        <form className={styled.form} onSubmit={e => onSubmitHandler(e)}>
            {inputs.map((input, i) => (
                <Input
                    className={styled['form-input']}
                    key={i}
                    type={input.type}
                    refer={input.ref}
                />
            ))}
            <Input type="submit" className={`${styled.btn}`} />
        </form>
    );
};

export default Form;
