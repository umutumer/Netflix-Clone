import React, { useEffect, useState } from 'react'
import Logo from '../assets/navbar-logo.png';
import { Link } from 'react-router-dom';
import ProfilePicture from '../assets/profile.jpg'
import { IoMdArrowDropdown, IoMdArrowDropup  } from "react-icons/io";
const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    background: scrollY > 100 ? '#161616' : 'transparent',
  };
  return (
    <nav className='w-full h-[100px] fixed flex items-center justify-between z-50' style={navbarStyle}>
        <Link to='/home'>
            <img src={Logo} alt="Logo" className='w-32' />
        </Link>
        <div className='flex text-xl'>
            <Link to='/movies' className='mr-5'>Diziler</Link>
            <Link to='/films'>Filmler</Link>
        </div>
       <div className='relative flex items-center mr-6 justify-center'>
       <img src={ProfilePicture} alt="profilePicture" className='w-12 mr-2 rounded'  />
       <IoMdArrowDropdown className=' text-3xl text-white' onClick={toggleDropdown} />
       {isDropdownOpen &&(
         <div className='absolute -bottom-14 right-4 p-2 w-24 bg-black border rounded'>
         <Link to='/'>
           Çıkış Yap
         </Link>
         <IoMdArrowDropup  className='absolute text-3xl -top-5 right-8' />
       </div>
       
       )}
       </div>
    </nav>
  )
}

export default Navbar