import React from 'react';
import './homepage.style.css'
import SideBar from "../sidebar";
import LogoBox from "../Logobox";
import NavBox from "../Navbox";

const HomePage = () => {
    return (
        <div className={'homepage'}>

            <div className={'homepage_hc'}>
                <SideBar/>
                <LogoBox/>
                <NavBox/>
            </div>


             <div className={'homepage_home-mobile hm'}>
                 <SideBar/>
                 <LogoBox/>
             </div>
        </div>
    );
};

export default HomePage;