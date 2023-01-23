import { Link } from 'react-router-dom';

function SolutionCard({ icon, title }) {
  const Icon = icon;

  return (
    <Link>
      <div className='border-2 border-slate-200 lg:h-32 lg:w-64 md:h-32 md:w-44 h-[150px] w-[315px] flex flex-col items-center justify-center rounded-3xl text-blue-900 hover:text-blue-500 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-200 transition-all duration-400'>
        <Icon className='md:text-2xl text-4xl mb-2' />
        <h2 className='md:text-xl text-3xl font-semibold'>{title}</h2>
      </div>
    </Link>
  );
}

export default SolutionCard;
