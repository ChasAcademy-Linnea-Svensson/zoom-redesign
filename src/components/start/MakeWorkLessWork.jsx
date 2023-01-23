import Button from '../shared/Button';

function MakeWorkLessWork() {
  return (
    <section className=' flex flex-col md:flex-row items-center justify-center mt-16 md:mb-0 mb-16'>
      <div className='bg-blue-900 h-[330px] w-full lg:w-[35%] relative md:mb-0 mb-12 '>
        <img
          className='w-[445px] md:mt-0 absolute top-2/4 translate-y-[-50%] left-2/4 translate-x-[-50%] md:translate-x-0 md:left-0 lg:pl-5'
          src='/zm-product-wheel.png'
          alt='product-wheel'
        />
      </div>
      <div className='md:text-blue-300 text-blue-900 p-10 flex flex-col gap-8 md:items-start text-center md:text-left items-center md:justify-center h-[330px] md:bg-blue-900'>
        <h1 className='text-5xl font-semibold '>Make work less work</h1>
        <p className='text-lg md:text-blue-300 text-slate-400 '>
          Securely connect and collaborate so you can work better together.
          Simple to manage and delightful to use, Zoom powers the modern
          workforce.
        </p>
        <Button outlineOnly={true} outlineOnlyTextColor='md:blue-100'>
          Discover the Possibilities
        </Button>
      </div>
    </section>
  );
}

export default MakeWorkLessWork;
