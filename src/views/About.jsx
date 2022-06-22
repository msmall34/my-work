import React, { useEffect, useState, useRef } from 'react'
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-scroll';

const About = (props) => {
    const ref = useRef()

    const [isAboutSection, setIsAboutSection] = useState(false);

    // au scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              //do your actions here
              setTimeout(() => {
                setIsAboutSection(true)
                }, 1000)
            } else {
                setTimeout(() => {
                    setIsAboutSection(false)
                }, 1000)
                
            }
          }
        );
        if (ref.current) {
          observer.observe(ref.current);
        }
      }, []);


    return (
        <section ref={ref} id='about' name='about' className='about w-full h-screen flex flex-col justify-center items-center bg-theme-light-200 text-slate-800'>
                <div className='max-w-[1000px] w-full h-full md:flex md:items-center md:justify-center'>
                    <div className='px-4 flex flex-col items-start justify-start lg:flex-row lg:items-center '>
                        <div className='aboutContainer md:max-w-[50%]'>
                            <p className='text-left text-2xl mb-3'>
                                Who am I ?
                            </p>
                            <p className='text-left text-4xl font-bold mb-3'>
                                What im doing ?
                            </p>
                            <div className='flex flex-col items-start'>
                                <p className='text-left mb-2'>
                                    I am a Front-end web Developer since 2014, im based in Les clayes sous bois (western suburbs of Paris),
                                
                                </p>
                                <p className='text-left mb-2'>
                                    
                                    I love creating intuitive, fast and beautiful web apps with wow UI effects in order to provide the best user experience possible. <br/>
                                
                                </p>
                                <p className='text-left'>
                                
                                    I always worry about the performance to be sure that the overall feeling stays the same on every device.
                                </p>
                            </div>
                        </div>
                        <div className='skillsContainer '>
                            <Zoom bottom cascade when={isAboutSection}>
                                <ul id="techList">
                                    <li className="react">react</li>
                                    <li className="css3">css3</li>
                                    <li className="javascript">javascript</li>
                                    <li className="jquery">jquery</li>
                                    <li className="typescript">typescript</li>
                                    <li className="webstandards">web standards</li>
                                    <li className="accessibility">accessibility</li>
                                    <li className="usability">usability</li>
                                    <li className="seo">seo</li>
                                    <li className="responsive">responsive</li>
                                    <li className="api">api</li>
                                    <li className="ajax">ajax</li>
                                    <li className="git">git</li>
                                    <li className="styledcomponent">styled component</li>
                                    <li className="nextjs">nextjs</li>
                                    <li className="redux">redux</li>
                                    <li className="jg">j.g.</li>
                                    <li className="skills">skills</li>
                                    </ul> 
                            </Zoom>
                        </div>

                      
                        {/* <Link to={'work'} smooth={true} duration={1000} className='hidden lg:flex right-nav black z-100'>
                            <p>Recent work</p>
                            <div className="svg-icon">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="9px" viewBox="0 0 64 8.9" enableBackground="new 0 0 64 8.9" xmlSpace="preserve">
                            <polyline fill="#000" points="51,7.9 51,0.9 64,4.4 "></polyline>
                            <line fill="none" stroke="#000" strokeMiterlimit="10" x1="51" y1="4.4" x2="0" y2="4.4"></line>
                            </svg>		
                            </div>
                        </Link> */}
                        
                    </div>


                    
                </div>
        </section>
    )
}

export default About