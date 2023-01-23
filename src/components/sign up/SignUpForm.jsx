import { Link } from 'react-router-dom';
import Button from '../shared/Button';

function SignUpForm() {
  return (
    <form
      aria-label='Login form'
      className='flex items-center justify-center p-8 lg:w-[70%] md:w-[60%] w-full h-fit'
    >
      <div className='flex flex-col items-start justify-center gap-8 w-80'>
        <h1 className=' text-4xl font-semibold text-slate-700'>
          Let's Get Started
        </h1>
        <div className='relative'>
          <label htmlFor='email'>Email adress</label>
          <input
            type='email'
            name='email'
            id='email'
            className='w-full h-10 px-4 rounded-md border-2 border-slate-600'
          />
        </div>
        <p className='text-slate-500'>
          By proceeding, I agree to{' '}
          <Link to='privacy-statement' className='text-blue-600'>
            Zoom's Privacy Statement
          </Link>{' '}
          and
          <Link to='terms-and-service' className='text-blue-600'>
            {' '}
            Terms of Service.
          </Link>
        </p>
        <div>
          <p>
            <input
              type='checkbox'
              aria-checked='false'
              name='consent'
              id='subscribe-consent'
              className='mr-2'
            />
            <label htmlFor='subscribe-consent'>
              I would like to receive communications about products, offerings,
              and industry trends from Zoom. I understand that I can unsubscribe
              at any time.
            </label>
          </p>
        </div>
        <Button bigBtn={true} bgColor='blue-500'>
          Continue
        </Button>
      </div>
    </form>
  );
}

export default SignUpForm;
