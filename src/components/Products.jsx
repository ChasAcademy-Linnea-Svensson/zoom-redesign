import Icon from './start/Icon';
import { FaVideo, FaPhoneAlt, FaChalkboard } from 'react-icons/fa';
import { HiChatAlt2 } from 'react-icons/hi';
import { BsFillKeyboardFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Button from './shared/Button';

function Products() {
  return (
    <section className='bg-blue-200 rounded-lg py-8 m-8 flex flex-col items-center justify-center h-fit '>
      <img src='/zoom-products.png' alt='' />
      <h1 className='text-blue-900 text-5xl font-semibold mt-8 text-center'>
        Unified communication and
        <br /> collaboration platform
      </h1>
      <p className='mt-8 text-lg text-blue-400'>
        Make meaningful connections with meetings, team chat, whiteboard, phone,
        and more in one offering.
      </p>
      <div className='flex items-center justify-center gap-36 my-16'>
        <div className='flex flex-col gap-4'>
          <Icon icon={<FaVideo />}>Virtual Meetings</Icon>
          <Icon icon={<HiChatAlt2 />}>Team Chat</Icon>
          <Icon icon={<FaPhoneAlt />}>VoIP Phone System</Icon>
        </div>
        <div className='flex flex-col gap-4'>
          <Icon icon={<FaChalkboard />}>Online Whiteboard</Icon>
          <Icon icon={<BsFillKeyboardFill />}>Conversation Intelligence</Icon>
          <Icon icon={<MdEmail />}>Email and Calendar</Icon>
        </div>
      </div>
      <Button outlineOnly={true} textColor='blue-700' bgColor='blue-700'>
        Discover Zoom One
      </Button>
    </section>
  );
}

export default Products;
