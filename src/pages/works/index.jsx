import React, {useState} from 'react';
import './works.style.css'
import {PortfolioData} from "./portfoliodata";
import Footer from "../../components/homepage/footer";


const Works = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    console.log(length)

    const moveNext = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const movePrev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <div className={'works container'}>
            <div className={'works_w-content'}>
                <div className={'works_w-content_works-pics'}>
                    <div onClick={moveNext} className={'works_w-content_works-pics_np-icons'}>
                        <div>  &#x3C;Prev&#x3E;</div>
                    </div>

                    {
                        PortfolioData.map((el, index) => (
                            <div key={index} className={index === current ? 'el active' : 'el'}>
                                {
                                    index === current && (
                                        <div className={'projects'}>
                                            <div className={'projects_emage'}>
                                                <img src={el.emage} alt='project image' className='image'/>
                                            </div>
                                            <div className={'details'}>
                                               <a target="_blank" className={'project-links'} href={el.link}><h1>{el.name}</h1></a>
                                                Tools: <span>{el.tools}</span>

                                                <div className={'description'}>
                                                    <h3>Description</h3>
                                                    <span>
                                                        s simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever
                                                        since the 1500s, when an unknown
                                                        printer took a galley of type and scrambled
                                                        it to make a type specimen bo
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                }

                            </div>
                        ))
                    }

                    <div onClick={movePrev} className={'works_w-content_works-pics_np-icons'}>
                        <div>  &#x3C;&#8725;Next&#x3E;</div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Works;