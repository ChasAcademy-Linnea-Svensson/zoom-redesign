import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useEffect, useState } from 'react';

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [btnActive, setBtnActive] = useState(false);

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });

  useEffect(() => {
    if (width > 1023) {
      setBtnActive(false);
    }
  }, [width]);
  //1024

  const handleClick = () => {
    if (btnActive === false) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  };

  return (
    <header
      className={`border-stone-400 px-8 py-6 flex justify-between ${
        window.scrollY > 800 && console.log('changed')
      }`}
    >
      <div className={`flex gap-8 ${btnActive && 'h-60 w-full'}`}>
        <Link to='/' role='button'>
          <img className='h-[25px]' src='/Zoom_logo.svg' alt='zoom-logo' />
        </Link>
        <div className={`lg:block ${btnActive ? 'block' : 'hidden'}`}>
          <Navbar btnActive={btnActive} />
        </div>
      </div>
      <div className='md:block ml-auto mr-8 hidden w-96 text-right'>
        <Link
          to='/contact-sales'
          role='button'
          className='mr-8 border-b-2 border-slate-700 text-slate-700 hover:text-blue-600 hover:border-blue-600'
        >
          Contact Sales
        </Link>
        <Link
          to='/sign-up'
          role='button'
          className=' border-b-2 border-slate-700 text-slate-700 hover:text-blue-600 hover:border-blue-600'
        >
          Sign Up Free
        </Link>
      </div>
      <button
        onClick={handleClick}
        className={` z-10 ${btnActive && 'mb-auto'}`}
      >
        <RxHamburgerMenu className='text-3xl lg:hidden' />
      </button>
    </header>
  );
}

export default Header;
