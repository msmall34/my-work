import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  //FaFacebook,
  //FaLinkedinIn,
  FaGlobe,
  FaGlobeEurope,
  FaGlobeAfrica
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/msm.svg';
import { LOCALES } from "../i18n/locales";
import flagFr from '../assets/img/flag-fr.png';
import flagEn from '../assets/img/flag-us.png';
import cv from '../assets/CV_Muriel SMALL_Developpeuse_Frontend-FR-03-05-2022.pdf';


const Navbar = (props) => {

  const [nav, setNav] = useState(false);
  const [showSwitch, setShowSwitch] = useState(false);

  const handleClick = () => setNav(!nav);

  const NavLink = ({ page }) => {
    const title = page.charAt(0).toUpperCase() + page.slice(1);
    return <Link to={`${page}`} smooth={true} duration={1000}>{title}</Link>;
  };
  
  const NavLinkMobile = ({ page }) => {
    const title = page.charAt(0).toUpperCase() + page.slice(1);
    return <Link onClick={handleClick} to={`${page}`} smooth={true} duration={500}>{title}</Link>;
  };

  // Languages
  const languages = [
    { name: "ENGLISH", code: LOCALES.ENGLISH },
    { name: "FRANCAIS", code: LOCALES.FRENCH },
  ];

  const showLanguageSwitch = () => {
    setShowSwitch(!showSwitch)
  }

  const changeLanguage = (code) => {
    if(props.handleChange) {
      props.handleChange(code)
    }
    setShowSwitch(!showSwitch)
  }

  return (
    <div className='navbar fixed w-full h-[80px] flex justify-between items-center px-4 bg-theme-dark-100 text-gray-300'>
      <div>
        <img src={Logo} alt='' style={{ width: '85px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex md:justify-center md:items-center'>
        <li>
          <NavLink page='home' />
        </li>
        <li>
          <NavLink page='about'/>
        </li>
        <li>
          <NavLink page='work'/>
        </li>
        <li>
          <NavLink page='contact'/>
        </li>
        <li>

        <div className="switcher">
          {/* Language switch */}
          <div className='flex flex-col items-center justify-center min-w-[60px] min-h-[60px]'>
            <span onClick={showLanguageSwitch}>
              <FaGlobe size={20} />
            </span>

            {/*<select onChange={props.handleChange} value={props.currentLocale} >
              {languages.map(({ name, code }) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>*/}

            {showSwitch &&
              <ul className='absolute top-16 right-0'>
              {languages.map(({ name, code }) => (
                  <li className='langueItem' onClick={() => changeLanguage(code)} >{name}</li>
                ))}
            </ul>
            }
          
          </div>
        </div>
        </li>
        
      </ul>

       
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul  className={!nav ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <NavLinkMobile page='home'/>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <NavLinkMobile page='about'/>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <NavLinkMobile page='work'/>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <NavLinkMobile page='contact'/>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-800'>
            <a  className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/muriel-small-b8803927'
              target={'_blank'}>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/msmall34'
              target={'_blank'}>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-700'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="mailto:murielpaule.small@gmail.com"
              target={'_blank'}>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href={cv}>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;