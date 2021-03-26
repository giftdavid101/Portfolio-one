import React, {useState} from 'react';
import './logobox.style.css'
import {AiOutlineHtml5, DiCss3, IoLogoJavascript, IoLogoReact, IoLogoNodejs} from "react-icons/all";
import {useSpring, animated} from 'react-spring';
import Typical from 'react-typical';
import Menu from "../../elements/menu";
import NavBar from "../navbar";
import HireMe from "../../elements/hire";

const LogoBox = () => {

    const props = useSpring({opacity: 1, from: {opacity: 0}})
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const closeMenu = () => {
        setClick(true)
    }

    return (
        <div className={'logo-box'}>
            <header>
                <div className={'l-m'}>
                    <div className={'logo'}>Gift David</div>
                    <div onClick={handleClick}>
                        {click ? <Menu/> : <Menu/>}
                    </div>
                </div>

                <div onClick={closeMenu}>
                    {
                        click ? <NavBar/> : null
                    }
                </div>

            </header>


            <div className={'logo-box_lb-content'}>
                <div className={'logo-box_lb-content_intro-text'}>
                    <animated.span style={props}><h1>I am a Front-End Developer.</h1></animated.span>
                    <Typical
                        steps={['Hello!', 1000, 'Hello Let me bring your', 500, 'Hello Let me bring your Designs', 500]}
                        loop={Infinity}
                        wrapper="p"
                        size='200'
                    />

                    to live with modern technologies.
                </div>
                <div className={'logo-box_lb-content_technologies'}>
                    <span className={'space'}><AiOutlineHtml5/></span>
                    <span className={'space'}> <DiCss3/></span>
                    <span className={'space'}><IoLogoJavascript/></span>
                    <span className={'space'}> <IoLogoReact/></span>
                    <span className={'space'}> <IoLogoNodejs/> </span>

                </div>
                <div style={{width:'100%', display:'flex'}}>

                    <HireMe/>
                </div>





            </div>

        </div>
    );
};

export default LogoBox;