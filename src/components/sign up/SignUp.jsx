import SignUpForm from './SignUpForm';
import SignUpInfoBox from './SignUpInfoBox';

function SignUp() {
  return (
    <div className='md:h-[600px] h-fit flex md:flex-row flex-col items-center justify-between '>
      <SignUpForm />
      <SignUpInfoBox />
    </div>
  );
}

export default SignUp;
