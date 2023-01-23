import { Link } from 'react-router-dom';
import Button from '../shared/Button';

function FinalLockUp() {
  return (
    <section className='bg-blue-900 text-blue-300 h-[330px] flex flex-col items-center justify-center mt-8'>
      <h2 className='text-6xl font-semibold'>Ready to get started?</h2>
      <div className='flex gap-8 mt-12'>
        <Link to='/sign-up'>
          <Button>Sign Up, It's Free</Button>
        </Link>
        <Link to='plans-&-pricing'>
          <Button outlineOnly={true} outlineOnlyTextColor='blue-300'>
            Plans & Pricing
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default FinalLockUp;
