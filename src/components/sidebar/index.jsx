import React from 'react';
import './sidebar.styles.css'
import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin} from "react-icons/all";

const SideBar = () => {
    return (
        <div className={'sidebar'}>
            <div className={'sidebar_sb'}>
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