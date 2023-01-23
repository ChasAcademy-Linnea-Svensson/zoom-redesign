import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='absolute'>
      <ul
        role='menu'
        className='flex gap-8 text-stone-500 font-semibold lg:flex-row lg:top-0  lg:left-5 flex-col relative top-[4.5rem] left-[-8rem] w-full'
      >
        <li
          role='none'
          className='lg:border-none border-b-2 lg:w-auto w-[85vw]'
        >
          <Link role='menuitem' to='/products'>
            Products
          </Link>
        </li>
        <li
          role='none'
          className='lg:border-none border-b-2 lg:w-auto w-[85vw]'
        >
          <Link role='menuitem' to='/solutions'>
            Solutions
          </Link>
        </li>
        <li
          role='none'
          className='lg:border-none border-b-2 lg:w-auto w-[85vw]'
        >
          <Link role='menuitem' to='resources'>
            Resources
          </Link>
        </li>
        <li
          role='none'
          className='lg:border-none border-b-2 lg:w-auto w-[85vw]'
        >
          <Link role='menuitem' to='plans-&-pricing'>
            Plans & Pricing
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
