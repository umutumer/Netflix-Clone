import React, { useState } from 'react';
import LoginBackground from '../assets/login-background.jpg';
import Logo from '../assets/navbar-logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleClickSubmit = () => {
    const correctEmail = 'utumer6@gmail.com';
    const correctPassword = 'password123';

    if (email === correctEmail && password === correctPassword) {
      navigate('/home');
    } else if(email==="" || password===""){
      setError('Lütfen email ve şifrenizi giriniz.');
    }else{
      setError('Giriş bilgileriniz hatalı.Lütfen tekrar deneyiniz.');
    }
  };

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
          style={{ backgroundColor: '#333333' }}
          className='rounded w-[90%] py-2 px-3 text-white mb-4'
          id='username'
          type='email'
          placeholder='E-posta'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          style={{ backgroundColor: '#333333' }}
          className='rounded w-[90%] py-2 px-3 text-white mb-10'
          id='password'
          type='password'
          placeholder='Parola'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          onClick={handleClickSubmit}
          className=' bg-red-600 hover:bg-red-700 ease-in-out duration-300 text-white font-bold w-[90%] py-2 px-4 mb-2 rounded'
          type='button'
        >
          Giriş Yap
        </button>
        {error && <p className='text-red-600 mb-2'>{error}</p>}
        <div className='w-[90%] flex justify-between mb-6'>
          <div>
            <input type='checkbox' name='rememberme' id='rememberme' className='form-checkbox bg-gray-300 text-gray-700' />
            <label className='text-gray-300' htmlFor='rememberme' id='rememberMeClick'>
              Beni Hatırla
            </label>
          </div>
          <div>
            <Link to='/' className='text-gray-300 hover:underline'>
              Yardım ister misiniz?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
