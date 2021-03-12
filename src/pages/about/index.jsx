import React from 'react';
import './about.style.css';

const data = [
    {
        id: 1,
        name:'Design',
        imageUrl:'https://res.cloudinary.com/gift101/image/upload/v1615490559/images_itgctv.png',
        content: ' Individual design based on analysis of your business niche.'

    },
    {
        id: 2,
        name:'Development',
        imageUrl:'https://res.cloudinary.com/gift101/image/upload/v1615496062/dev_vub5pj.png',
        content: 'Writing Html, Css and Javascript code. '

    }  ,  {
        id: 3,
        name: 'Mobile Adaptation',
        imageUrl:'https://res.cloudinary.com/gift101/image/upload/v1615496200/mobile_t8gygy.png',
        content: 'Adaptation for all screen sizes and all devices.'

    } ,   {
        id: 4,
        name:'Animation',
        imageUrl:'https://res.cloudinary.com/gift101/image/upload/v1615496437/touch_yqpqa2.png',
        content: 'Creating magic and making great experiences for users.'

    }
]

const About = () => {
    return (
        <div className={'about container'}>
           <div className={'about_au'}>
               <h1>About Me</h1>
               My name is Gift David. I am a Front-End developer. I create
               interactive and responsive website that will best represent
               your business for clients and partners. I use pure Html, Css,
               Javascript and React Js.
               I prefer to work as a freelancer(self-employed) and also do not mind working
               in an office.


               <div className={'about_au_items'}>
                   {data.map((el) => (
                       <div className={'card'} key={el.id}>
                           <div className={'emage'}>
                               <img src={el.imageUrl} alt={'foto'}/>
                               <h2>{el.name}</h2>
                           </div>
                           <div>
                               {el.content}
                           </div>
                       </div>

                   )) }
               </div>
                 <div className={'about_au_skills'}>
                     <div className={'horizontal-line'}><h1>Skills</h1></div>
                     <div className={'about_au_skills_sc'}>
                         <div>
                             <div className={'sc-one'}>
                                 <h4>Software Tools</h4>
                                 <div>
                                     <div className={'mb'}>Figma</div>
                                     <div className={'mb'}>Adobe Photoshop</div>
                                     <div className={'mb'}>illustrator</div>
                                 </div>

                             </div>
                             <div className={''}>
                                 <h4>Web Development</h4>
                                 <div>
                                     <div className={'mb'}>Html 5</div>
                                     <div className={'mb'}>Css 3</div>
                                     <div className={'mb'}>Javascript</div>
                                     <div className={'mb'}>React Js</div>
                                     <div className={'mb'}>Redux</div>
                                     <div className={'mb'}>Node Js</div>
                                     <div className={'mb'}>Express Js</div>
                                     <div className={'mb'}>FireBase</div>
                                     <div className={'mb'}>GraphQl</div>
                                     <div className={'mb'}>MongoDB</div>
                                     <div className={'mb'}>Git</div>
                                 </div>

                             </div>
                             </div>

                     </div>

                 </div>
               <div style={{}}>
                   <div className={'box'} style={{backgroundImage:`linear-gradient(rgba(255, 255, 255, 7%), rgba(225 255 255)),url(https://res.cloudinary.com/gift101/image/upload/v1615540209/circle_lpdx2a.png)`}}>
                       <h1>"Choose  a  job you love and you'd never have to work a day in your life"</h1>
                   </div>

               </div>


           </div>
        </div>
    );
};

export default About;