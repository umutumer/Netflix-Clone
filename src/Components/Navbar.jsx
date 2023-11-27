import React, { useEffect, useState } from 'react'
import Logo from '../assets/navbar-logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);

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
        <div>
            <img src={Logo} alt="Logo" className='w-32' />
        </div>
        <div className='flex text-xl'>
            <Link className='mr-5'>Diziler</Link>
            <Link>Filmler</Link>
        </div>
        <Link to='/' className='text-xl mr-2'>Çıkış Yap</Link>
    </nav>
  )
}

export default Navbar