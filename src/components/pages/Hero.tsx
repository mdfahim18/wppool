import { ArrowDownToLine } from 'lucide-react';
import ForceDirectedGraph from '../ForceDirectedGraph';

interface HeroDataProps {
  id: number;
  amount: string;
  desc: string;
}
const heroData: HeroDataProps[] = [
  { id: 1, amount: '60', desc: 'Companies' },
  { id: 2, amount: '$100B', desc: 'Market cap' },
  { id: 3, amount: '3.5x', desc: 'Revenue multiple' },
  { id: 4, amount: '60%', desc: 'LTM revenue growth rate' },
];
const Hero = () => {
  return (
    <section className=' flex flex-col sm:flex-row bg-color h-[90vh]'>
      <div className=' hidden sm:flex absolute w-full h-full lg:left-[20%] lg:w-[70%] overflow-hidden'>
        <ForceDirectedGraph />
      </div>
      <div className=' absolute left-[20%] bottom-16 sm:bottom-20 sm:left-[10%] flex flex-col gap-7'>
        {heroData?.map((data) => (
          <div key={data.id} className='  flex flex-col justify-between gap-2'>
            <h1 className=' text-4xl text-white'>{data.amount}</h1>
            <p className=' text-white'>{data.desc}</p>
          </div>
        ))}
      </div>
      <button className=' absolute cursor-pointer right-10 bottom-10 rounded-full border border-white p-2'>
        <ArrowDownToLine className=' text-white text-2xl' />
      </button>
    </section>
  );
};

export default Hero;
