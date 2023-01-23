import { useState } from 'react';
import IndustrySolutionCards from './IndustrySolutionCards';
import SolutionCard from './SolutionCard';
import Button from '../shared/Button';

function SolutionList() {
  const [cards, setCards] = useState(IndustrySolutionCards);

  return (
    <section className='grid md:grid-cols-2 grid-cols-1 md:text-left text-center lg:px-20 md:px-10 md:border-none border-t-8 border-blue-300'>
      <div className='flex flex-col md:items-start items-center justify-center md:pt-8 pt-12'>
        <h2 className='text-5xl font-semibold text-blue-900 '>
          Powering organizations across industries and geographies
        </h2>
        <p className='text-slate-400 my-8'>
          Zoom helps consolidate communications, connect people, and collaborate
          better together in the boardroom, classroom, operating room, and
          everywhere in between.
        </p>
        <Button>Explore Industry Solutions</Button>
      </div>
      <div className='grid grid-cols-2 mt-8 gap-4 place-items-center md:ml-auto'>
        {cards.map((card) => {
          return (
            <SolutionCard key={card.id} icon={card.icon} title={card.title} />
          );
        })}
      </div>
    </section>
  );
}

export default SolutionList;
