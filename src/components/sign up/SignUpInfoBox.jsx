import CheckboxText from './CheckboxText';
import CheckboxTextContent from './CheckboxTextContent';
import { useState } from 'react';

function SignUpInfoBox() {
  const [textContent, setTextContent] = useState(CheckboxTextContent);

  return (
    <aside className='lg:w-[35%] md:w-[40%] w-full md:h-full h-96 bg-slate-200 flex items-center justify-center'>
      <div className='w-[90%] bg-white  p-4 rounded-lg shadow-lg shadow-slate-400 flex flex-col gap-2'>
        <h2 className='mx-auto text-xl font-semibold mb-4'>
          Create your free Basic account
        </h2>
        {textContent.map((item) => (
          <CheckboxText key={item.id}>{item.text}</CheckboxText>
        ))}
      </div>
    </aside>
  );
}

export default SignUpInfoBox;
