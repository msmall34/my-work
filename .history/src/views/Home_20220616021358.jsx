import React, { useEffect, useRef } from 'react'
import { Link } from 'react-scroll';
import {HiArrowNarrowRight} from 'react-icons/hi'
import AnimHome from "../animations/AnimHome";
import Slide from 'react-reveal/Slide';
import {isMobile} from 'react-device-detect';
import {FormattedMessage} from "react-intl";
import { init } from 'ityped'

const Home = (props) => {

    const refContainer = useRef(null);
    
    useEffect(() => {
        if (!refContainer.current) {
          return;
        }
        init(refContainer.current, { 
          showCursor: false, 
          strings: ['JS.', 'or React JS'] 
        })
      }, []);


  return (
    <section id="home" className='home w-full h-screen bg-theme-dark-100'>
        <Slide bottom cascade>
            {/* Container */}
            <div className='home-content max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-3xl sm:text-6xl  text-pink-600'><FormattedMessage id="home_salutation"/></p>
                <h1 className='text-3xl sm:text-6xl font-bold text-theme-light-100'>Muriel SMALL </h1>
                <h2 className='text-3xl sm:text-6xl font-bold text-theme-light-200'><FormattedMessage id="home_job"/></h2>
                <p className='text-theme-light-200 py-4 max-w-[700px]'>
                    <FormattedMessage id="specialisation"/> <span ref={refContainer}> </span>
                </p>

                <div className='w-40 btnHome lg:z-10'>

                    <Link to={'work'} smooth={true} duration={1000} className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        View Work 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3'/>
                        </span>
                    </Link>
                </div>
                
            </div>
        </Slide >

        {!isMobile && 
            <AnimHome/>
        } 

        
        <Link /* onClick={() => props.setSelectedItem('about')} */ to={'about'} smooth={true} duration={1000} className="hidden lg:flex right-nav white">
            <p>Scroll down</p>
            <div className="svg-icon">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="9px" viewBox="0 0 64 8.9" enable-background="new 0 0 64 8.9" xmlSpace="preserve">
            <polyline fill="#ffffff" points="51,7.9 51,0.9 64,4.4 "></polyline>
            <line fill="none" stroke="#ffffff" stroke-miterlimit="10" x1="51" y1="4.4" x2="0" y2="4.4"></line>
            </svg>		
            </div>
        </Link>


    </section>
  )
}

export default Home