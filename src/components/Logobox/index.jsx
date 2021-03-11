import React from 'react';
import './logobox.style.css'
import {Link} from 'react-router-dom'


const LogoBox = () => {
    return (
        <div className={'logo-box'}>
           <header>
               <div className={'logo'}>Gift David</div>
           </header>

            <div className={'logo-box_intro-text'}>
                <span>
                     I am a front-end developer. Let me bring your designs to live.
                </span>
                <div className={'logo-box_intro-text_touch'}>
                   <span className={'logo-box_intro-text_touch_touch-link'}> <Link  to={'/chat'}>Get in touch</Link></span>
                </div>

            </div>
        </div>
    );
};

export default LogoBox;