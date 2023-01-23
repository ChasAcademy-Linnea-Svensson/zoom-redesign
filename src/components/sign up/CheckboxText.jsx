import { AiFillCheckCircle } from 'react-icons/ai';

function CheckboxText({ children }) {
  return (
    <p className='flex items-center gap-2'>
      <AiFillCheckCircle className=' text-green-500 min-w-fit text-3xl' />
      {children}
    </p>
  );
}

export default CheckboxText;
