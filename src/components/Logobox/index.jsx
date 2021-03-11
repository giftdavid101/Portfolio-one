import React from 'react';
import './logobox.style.css'
import {AiOutlineHtml5,DiCss3, IoLogoJavascript,IoLogoReact, IoLogoNodejs} from "react-icons/all";
import {useSpring, animated} from 'react-spring';

const LogoBox = () => {

    const props = useSpring({opacity: 1, from: {opacity: 0}})


    return (
        <div className={'logo-box'}>
           <header>
               <div className={'logo'}>Gift David</div>
           </header>

            <div className={'logo-box_intro-text'}>
                <div>
                     <h1>I am a Front-End Developer.</h1>
                    <animated.span style={props}> Let me bring your designs to live with
                        modern technologies.</animated.span>
                </div>
                <div className={'technologies'}>
                    <span className={'space'}><AiOutlineHtml5/></span>
                    <span className={'space'}> <DiCss3/></span>
                    <span className={'space'}><IoLogoJavascript/></span>
                    <span className={'space'}> <IoLogoReact/></span>
                    <span className={'space'}> <IoLogoNodejs/> </span>

                </div>


            </div>

        </div>
    );
};

export default LogoBox;