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
                      <a className={'black'} href={'https://github.com/giftdavid101'}><AiFillGithub/></a>
                       <a className={'black'}  href={'https://twitter.com/GiftDavid12'}>  <AiFillTwitterCircle/> </a>
                      <a className={'black'}  href={'https://www.linkedin.com/in/gift-david-668a56b7/'}><AiFillLinkedin/></a>
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