import React from 'react';
import './homepage.style.css'
import SideBar from "../../components/sidebar";
import LogoBox from "../../components/Logobox";
import NavBox from "../../components/Navbox";

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