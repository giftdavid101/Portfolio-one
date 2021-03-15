import React from 'react';
import './footer.style.css'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, HiMenuAlt1} from "react-icons/all";
const Footer = () => {
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

                <div className={'footer_f-content_f-media_menu'}>
                    <HiMenuAlt1/>
                </div>

            </div>
        </div>
    );
};

export default Footer;