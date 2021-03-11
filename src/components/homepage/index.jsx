import React from 'react';
import './homepage.style.css'
import SideBar from "../sidebar";
import LogoBox from "../Logobox";
import NavBox from "../Navbox";

const HomePage = () => {
    return (
        <div className={'homepage'}>
             <SideBar/>
             <LogoBox/>
             <NavBox/>
        </div>
    );
};

export default HomePage;