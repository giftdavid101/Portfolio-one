import React, {useState} from 'react';
import './works.style.css'
import {PortfolioData} from "./portfoliodata";
import Footer from "../../components/footer";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/all'
import NavBar from "../../components/navbar";


const Works = ({slides}) => {
    const [click , setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
    const closeMobile = () => {
        setClick(true)
    }

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
            <div onClick={closeMobile}>
                { click ?  <NavBar/> : null}
            </div>
            <div className={'works_w-content container'}>
                <div className={'works_w-content_works-pics'}>
                    <div onClick={moveNext} className={'works_w-content_works-pics_np-icons'}>
                        <div className={'code-arrow'}>  &#x3C;Prev&#x3E;</div>
                        <div className={'r-arrow'}><FaArrowAltCircleLeft/></div>
                    </div>

                    {
                        PortfolioData.map((el, index) => (
                            <div key={index} className={index === current ? 'el active' : 'el'}>
                                {
                                    index === current && (
                                        <div className={'projects'}>
                                            <div className={'projects_emage'}>
                                                <img className={'projects_emage_w-emage'} src={el.emage} alt='project emage'/>
                                            </div>
                                            <div className={'details'}>
                                               <a target={"_blank"} rel="noreferrer" className={'project-links'} href={el.link}><h1>{el.name}</h1></a>
                                                Tools: <span>{el.tools}</span>

                                                <div className={'description'}>
                                                    <h3>Description</h3>
                                                    <span>
                                                        A simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever
                                                        since the 1500s, when an unknown
                                                        printer took a galley of type and scrambled
                                                        it to make a type specimen bo
                                                    </span>
                                                </div>
                                                <span> Note: <i style={{color:'grey', fontSize:'15px'}}>{el.details}</i></span>
                                            </div>
                                        </div>

                                    )
                                }

                            </div>
                        ))
                    }

                    <div onClick={movePrev} className={'works_w-content_works-pics_np-icons'}>
                        <div className={'code-arrow'}>  &#x3C;&#8725;Next&#x3E;</div>
                        <div className={'r-arrow'}><FaArrowAltCircleRight/></div>
                    </div>
                </div>
                <Footer click={click} handleClick={handleClick}/>
            </div>
        </div>
    );
};

export default Works;