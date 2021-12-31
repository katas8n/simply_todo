import React from 'react';

export const Input = ({ type, label, className, refer }) => {
    return (
        <input
            aria-label={label}
            type={type}
            className={className}
            ref={refer}
        ></input>
    );
};
