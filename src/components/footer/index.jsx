import React, {useState} from 'react';
import './footer.style.css'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, HiMenuAlt1} from "react-icons/all";
import NavBar from "../navbar";

const Footer = () => {
    const [state, setState] = useState(false);
    const displayMenu = () => {
        console.log('clicked')
    }
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
                    <div style={{
                        width: '100px',
                        background: 'black',
                        borderRadius: '50px',
                        color: 'white',
                        textAlign: 'center',
                        fontSize: '23px',
                        margin: '0 10px',
                        padding: '4px'
                    }}>
                        Menu
                    </div>

                </div>
            </div>
            </div>
            );
            };

            export default Footer;