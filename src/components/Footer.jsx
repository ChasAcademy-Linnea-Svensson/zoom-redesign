import React, { useState } from 'react';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Footer() {
  const [instagram, setInstagram] = useState(false);
  const handleEnter = (e) => {
    setInstagram(true);
  };
  const handleLeave = (e) => {
    setInstagram(false);
  };

  return (
    <footer className='bg-slate-900 text-slate-300 flex flex-col gap-4 items-center justify-center h-fit py-8 text-sm'>
      <div className='flex items-center justify-around w-[85vw] mb-8'>
        <div className='flex flex-col items-start justify-center'>
          <h5 className='mb-4 font-semibold'>About</h5>
          <Link role='button'>Zoom Blog</Link>
          <Link role='button'>Our Team</Link>
          <Link role='button'>Partners</Link>
        </div>
        <div className='flex flex-col items-start justify-center'>
          <h5 className='mb-4 font-semibold'>Sales</h5>
          <Link role='button'>Contact Sales</Link>
          <Link role='button'>Plans & Pricing</Link>
          <Link role='button'>Request a Demo</Link>
        </div>
        <div className='flex flex-col items-start justify-center'>
          <h5 className='mb-4 font-semibold'>Support</h5>
          <Link role='button'>Support Center</Link>
          <Link role='button'>Feedback</Link>
          <Link role='button'>Accessibility</Link>
        </div>
      </div>
      <p className='text-xs'>
        Copyright ©2023 Zoom Video Communications, Inc. All rights reserved.
      </p>
      <div className='flex gap-8 text-4xl'>
        <a
          role='button'
          href='https://www.instagram.com/zoom/'
          target='_blank'
          className='hover:bg-gradient-to-r hover:from-purple-600 hover:via-red-500 hover:to-yellow-300 p-2 rounded-full hover:rotate-[115deg]'
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <AiOutlineInstagram className={instagram && 'rotate-[-115deg]'} />
        </a>
        <a
          role='button'
          href='https://www.facebook.com/zoom'
          target='_blank'
          className='hover:bg-blue-600 p-2 rounded-full'
        >
          <AiOutlineFacebook />
        </a>
        <a
          role='button'
          href='https://twitter.com/zoom'
          target='_blank'
          className='hover:bg-blue-400 p-2 rounded-full '
        >
          <AiOutlineTwitter />
        </a>
        <a
          role='button'
          href='https://www.youtube.com/zoommeetings'
          target='_blank'
          className='hover:bg-red-600 p-2 rounded-full'
        >
          <AiOutlineYoutube />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
