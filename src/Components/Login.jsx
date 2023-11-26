import React from 'react';
import LoginBackground from '../assets/login-background.jpg';
import Logo from '../assets/navbar-logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const handleClickSubmit = () =>{
        navigate('/home')
    }
  return (
    <div
      className='h-screen w-screen flex items-center justify-center relative'
      style={{
        backgroundImage: `url(${LoginBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <img src={Logo} className='w-96 absolute top-0 left-0' alt='Logo' />
      <form className='bg-black bg-opacity-70 flex flex-col items-center rounded-lg w-[400px] h-[600px]'>
        <div className='text-left w-full'>
            <h3 className='block text-whitefont-medium m-6 text-white text-4xl'>Oturum Aç</h3>
        </div>
          <input
          style={{ backgroundColor: '#333333'}}
            className='rounded w-[90%] py-2 px-3 text-white mb-4'
            id='username'
            type='text'
            placeholder='Kullanıcı Adı'
          />
          <input
          style={{ backgroundColor: '#333333'}}
            className='rounded w-[90%] py-2 px-3 text-white mb-10'
            id='password'
            type='password'
            placeholder='Parola'
          />
          <button
            onClick={()=>handleClickSubmit()}
            className=' bg-red-600 hover:bg-red-700 ease-in-out duration-300 text-white font-bold w-[90%] py-2 px-4 mb-2 rounded'
            type='button'
          >
            Giriş Yap
          </button>
          <div className='w-[90%] flex justify-between mb-6'>
            <div>
            <input type="checkbox" name="rememberme" id="rememberme" className='form-checkbox bg-gray-300 text-gray-700'/>
            <label className='text-gray-300' for="rememberme" id="rememberMeClick"> Beni Hatırla</label>
            </div>
            <div>
                <Link to='/' className='text-gray-300 hover:underline'>Yardım ister misiniz?</Link>
            </div>
          </div>
          <div className='w-[90%]'>
            <p className='text-gray-400'>Netflix'e katılmak ister misiniz? <span className='text-lg text-gray-300'><Link to='/registration' className='hover:underline'>Şimdi kaydolun.</Link> </span> </p>
          </div>
      </form>
    </div>
  );
};

export default Login;
