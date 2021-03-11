import React from 'react';

const Button = ({children, className}) => {
    return (
        <div>
            <button>{children}{className}</button>
        </div>
    );
};

export default Button;