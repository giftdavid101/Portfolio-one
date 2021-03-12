import React from 'react';
import './sidebar.styles.css'
import {HiMenuAlt1,AiFillGithub, AiFillTwitterCircle, AiFillLinkedin} from "react-icons/all";

const SideBar = () => {
    return (
        <div className={'sidebar'}>
            <div className={'sidebar_sb'}>
                <div className={'sidebar_sb_menubar'}>
                   <HiMenuAlt1/>
                </div>

                <div className={'socials'}>
                    <div className={'line lo'}>
                        {''}
                    </div>
                    <div className={'sidebar_sb_media'}>
                        <AiFillGithub/>
                        <AiFillTwitterCircle/>
                        <AiFillLinkedin/>
                    </div>
                    <div className={'line'}>
                        {''}
                    </div>

                </div>
                </div>
        </div>
    );
};
export default SideBar;