import Button from '../shared/Button';
import { Link } from 'react-router-dom';

function Sell() {
  return (
    <section>
      <div className='flex h-[530px] overflow-y-hidden md:pr-20 md:mt-8 '>
        <div className='h-[530px] flex flex-col  items-center justify-center  sm:h-[530px] lg:p-40 md:p-20  p-8 md:items-start'>
          <h1 className='md:text-left text-slate-800 text-center text-7xl font-extrabold'>
            One platform <br /> to
            <span className='text-blue-600'> connect</span>
          </h1>
          <p className='text-xl text-slate-400 mt-8 text-center md:text-left'>
            Bring teams together, reimagine workspaces, engage new audiences,
            and delight your customers — all on the Zoom platform you know and
            love.
          </p>
          <div className='flex gap-8 mt-8'>
            <Button>Plans & Pricing</Button>
            <Link to='/sign-up'>
              <Button outlineOnly={true}>Sign Up, It's Free</Button>
            </Link>
          </div>
        </div>
        <img
          className='w-[35%] h-[530px] md:block hidden object-cover'
          src='/front-img.jpeg'
          alt='group of people in meeting'
        />
      </div>
    </section>
  );
}

export default Sell;
