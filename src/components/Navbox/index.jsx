import React from 'react';
import './navbox.style.css';
import NavBar from "../navbar";
import Code from '../../img/code.jpg'

const NavBox = () => {
    return (
        <div className={'navbox'} style={{
            backgroundImage:`url(${Code})`
        }}>
        <NavBar/>

        </div>
    );
};

export default NavBox;