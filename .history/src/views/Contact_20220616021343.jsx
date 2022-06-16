import React from 'react';
import { Link } from 'react-scroll';

const Contact = (props) => {
  return (
    <section id="contact" name='contact' className='contact w-full h-screen flex justify-center items-center bg-theme-light-200'>
      
    <div className="content contact max-w-[1000px] h-full flex flex-col justify-center items-start">
      <h2 className="black">Let's get together.</h2>
      <p className="black">If you’d like to talk about a project, my work  <br />
      or anything else then <span className="colored">get in touch.</span></p>

      <ul className="black contact-links">
        <li>
          <p>Email</p>
          <a href="mailto:murielpaule.small@gmail.com">murielpaule.small@gmail.com</a>
        </li>
        <li>
          <p>Phone</p>
          <a href="tel:+33627470470">(+33) 6 27 47 04 70</a>
        </li>
        <li>
          <p>CV</p>
          <a href="http://dk.linkedin.com/in/hoffart">LinkedIn</a>
        </li>
        <li>
          <p>Based in</p>
          <a href="https://goo.gl/maps/XccgbzVnsb6SGQ6i9">Clayes sous bois, FR</a>
        </li>
      </ul>
    </div>

    
    <Linkto={'home'} smooth={true} duration={1000} className="hidden lg:flex right-nav black">
        <div className="svg-icon">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="9px" viewBox="0 0 64 8.9" enableBackground="new 0 0 64 8.9" xmlSpace="preserve">
            <polyline fill="#000000" points="51,7.9 51,0.9 64,4.4 "></polyline>
            <line fill="none" stroke="#000000" strokeMiterLimit="10" x1="51" y1="4.4" x2="0" y2="4.4"></line>
          </svg>		
        </div>
        <p>Back to top</p>
    </Link>


    <footer>
      © 2022 mSM by Muriel SMALL. <span>All rights reserved.</span>
    </footer>
    <div className="bg-fade" style={{"opacity" : 0}}>&nbsp;</div>
    <div className="bg-img">&nbsp;</div>

    </section>
  )
}

export default Contact