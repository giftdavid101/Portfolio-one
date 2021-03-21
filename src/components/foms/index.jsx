import React from 'react';
import './forms.style.css'

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
              </div>  <div className={'form-div'}>
                  <label> Phone Number:</label>
                  <input/>
              </div>  <div className={'form-div'}>
                  <label> Send a Message:</label>
                  <input className={'text-area'} type={'text area'}/>
              </div>

                <button className={'form-button'}>Submit</button>



            </form>
        </div>
    );
};

export default Forms;