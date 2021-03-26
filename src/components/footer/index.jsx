import React from 'react';
import './footer.style.css'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/all";
import Menu from "../../elements/menu";


const Footer = ({handleClick, click}) => {

    return (
        <div className={'footer container'}>
            <div className={'footer_f-content container'}>
                <div className={'footer_f-content_f-media'}>
                    <div className={'footer_f-content_f-media_mlnks'}>
                        <AiFillGithub/>
                    </div>

                    <div className={'footer_f-content_f-media_mlnks'}>
                        <AiFillTwitterCircle/>
                    </div>

                    <div className={'footer_f-content_f-media_mlnks'}>
                        <AiFillLinkedin/>
                    </div>

                </div>

                <div className={'footer_f-content_f-media_menu'} onClick={handleClick}>
                    {
                        click ?  <Menu/> : <Menu/>
                    }
                </div>
            </div>
            </div>
            );
            };

            export default Footer;