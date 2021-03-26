import React from 'react';
import './forms.style.css'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/all";

const Forms = () => {
    return (
        <div className={'forms'}>
            <form>
                  <div className={'form-div'}>
                    <label> Full Name:</label>
                    <input/>
                 </div>
                <div className={'form-div'}>
                  <label> Email:</label>
                  <input/>
                </div>
                <div className={'form-div'}>
                  <label> Send a Message:</label>
                  <input className={'text-area'} type={'text area'}/>
              </div>

                <button className={'form-button'}>Submit</button>
            </form>
            <div className={'contact-details'}>


            Media accounts:
            <div className={'media'}>

                <div className={''}>
                    <AiFillGithub/>
                </div>

                <div className={''}>
                    <AiFillTwitterCircle/>
                </div>

                <div className={''}>
                    <AiFillLinkedin/>
                </div>
            </div>
            <div>
                Email: <span>giftdavid101@gmail.com</span>
            </div>
            </div>
        </div>
    );
};

export default Forms;