import './Navbar.css'

import { Link, animateScroll as scroll, } from 'react-scroll'
//import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, {useState} from 'react';

import Flash from 'react-reveal/Flash';
import Hamburger from 'hamburger-react'
import Pulse from 'react-reveal/Pulse';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

   

  return (
    <div className='w-screen h-[80px] z-10 bg-slate-900 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl text-indigo-600 font-bold mr-4 sm:text-4xl'>BRAND.</h1>
          <ul className='hidden md:flex'>
          <Link to="home" smooth={true} duration={500}><li className='nav-link nav-link-ltr'>Home</li></Link>
          <Link to="about" smooth={true} offset={-200} duration={500}><li className='nav-link nav-link-ltr'>About</li></Link>
          <Link to="support" smooth={true} offset={-50} duration={500}><li className='nav-link nav-link-ltr'>Support</li></Link>
          <Link to="platforms" smooth={true} offset={-100} duration={500}><li className='nav-link nav-link-ltr'>Platforms</li></Link>
          <Link to="pricing" smooth={true} offset={-50} duration={500}><li className='nav-link nav-link-ltr'>Pricing</li></Link>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <Flash forever><button className='border-none bg-transparent text-white mr-4'>
            Sign In
          </button></Flash>
          <Pulse forever><button className='px-8 py-3'>Sign Up</button></Pulse>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick} >
              <Hamburger color="rgb(79 70 229)" />
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <Link  to="home" smooth={true} duration={500}><li className='border-b-2 cursor-pointer border-zinc-300 w-full hover:text-indigo-600 hover:ml-[30px] duration-300'>Home</li></Link>
          <Link  to="about" smooth={true} offset={-200} duration={500}><li className='border-b-2 cursor-pointer border-zinc-300 w-full hover:text-indigo-600 hover:ml-[30px] duration-300'>About</li></Link>
          <Link  to="support" smooth={true} offset={-50} duration={500}><li className='border-b-2 cursor-pointer border-zinc-300 w-full hover:text-indigo-600 hover:ml-[30px] duration-300'>Support</li></Link>
          <Link  to="platforms" smooth={true} offset={-100} duration={500}><li className='border-b-2 cursor-pointer border-zinc-300 w-full hover:text-indigo-600 hover:ml-[30px] duration-300'>Platforms</li></Link>
          <Link  to="pricing" smooth={true} offset={-50} duration={500}><li className='border-b-2 cursor-pointer border-zinc-300 w-full hover:text-indigo-600 hover:ml-[30px] duration-300'>Pricing</li></Link>

        <div className='flex flex-col my-4'>
           <Flash forever> <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button></Flash>
           <Pulse forever><button className='px-8 py-3'>Sign Up</button></Pulse>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
