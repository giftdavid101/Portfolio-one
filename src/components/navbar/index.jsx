import React from 'react';
import './navbar.style.css';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={'navbar'}>
            <nav>
                <div className={'a'}>
                    <Link to={'/'}>
                        Home
                    </Link>
                </div>

                <Link to={'/about'}>
                    About
                </Link>
                <Link to={'/works'}>
                   Works
                </Link>
                <Link to={'/contact'}>
                    Contact
                </Link>

            </nav>
        </div>
    );
};

export default NavBar;