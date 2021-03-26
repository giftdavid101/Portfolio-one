import React from 'react';
import './hire.style.css';
import {Link} from 'react-router-dom'

const HireMe = () => {
    return (
        <div className={'hire'}>
          <Link to={'/contact'}> Hire Me!</Link>
        </div>
    );
};

export default HireMe;