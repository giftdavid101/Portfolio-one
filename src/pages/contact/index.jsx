import React from 'react';
import './contact.style.css';
import Forms from "../../components/foms";
import Footer from "../../components/footer";

const Contact = (props) => {


    return (
        <div className={'contact-me container'} >
            <div className={'contact-me_forms container'} >
                <Forms/>
            </div>

          <Footer/>

        </div>
    );
};

export default Contact;