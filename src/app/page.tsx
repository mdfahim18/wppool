'use client';

import AllCompanies from '@/components/pages/AllCompanies';
import BollingerBandsChart from '@/components/BollingerBandsChart';
import Container from '@/components/Container';
import Hero from '@/components/pages/Hero';
import PageTitle from '@/components/PageTitle';
import { useState } from 'react';
import PotentialFeture from '@/components/pages/PotentialFeture';
import { CarouselSize } from '@/components/Carousel';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Footer from '@/components/Footer';

const theIndexData = [
  { id: 1, label: 'the index' },
  { id: 1, label: 'the index tab two' },
  { id: 1, label: 'the index tab three' },
  { id: 1, label: 'the index tab four' },
  { id: 1, label: 'the index tab five' },
];

const indexAmount = [
  { id: 1, label: 'WPPOOL Index', amount: '66.2', color: '#FC714D' },
  { id: 2, label: 'Google Index', amount: '26.6', color: '#615DE3' },
  { id: 3, label: 'Microsoft Index', amount: '34.1', color: '#7CA63A' },
  { id: 4, label: 'Twiter Index', amount: '17', color: '#6F34A1' },
];

const storyAndIdeas = [
  {
    id: 1,
    image: '/story/photo1.png',
    name: 'Sahabuddin Sagor',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    image: '/story/photo2.png',
    name: 'Sahabuddin Sagor',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    image: '/story/photo1.png',
    name: 'Sahabuddin Sagor',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 4,
    image: '/story/photo2.png',
    name: 'Sahabuddin Sagor',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 5,
    image: '/story/photo1.png',
    name: 'Sahabuddin Sagor',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 6,
    image: '/story/photo2.png',
    name: 'Sahabuddin Sagor',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 7,
    image: '/story/photo1.png',
    name: 'Sahabuddin Sagor',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 8,
    image: '/story/photo2.png',
    name: 'Sahabuddin Sagor',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const portfolioData = [
  { id: 1, image: '/portfolio/image1.png' },
  { id: 2, image: '/portfolio/image2.png' },
  { id: 3, image: '/portfolio/image3.png' },
  { id: 4, image: '/portfolio/image4.png' },
  { id: 5, image: '/portfolio/image5.png' },
  { id: 6, image: '/portfolio/image6.png' },
  { id: 7, image: '/portfolio/image7.png' },
  { id: 8, image: '/portfolio/image8.png' },
  { id: 8, image: '/portfolio/image9.png' },
  { id: 8, image: '/portfolio/image1.png' },
  { id: 8, image: '/portfolio/image2.png' },
  { id: 8, image: '/portfolio/image3.png' },
  { id: 8, image: '/portfolio/image4.png' },
  { id: 8, image: '/portfolio/image5.png' },
  { id: 8, image: '/portfolio/image6.png' },
  { id: 8, image: '/portfolio/image7.png' },
  { id: 8, image: '/portfolio/image8.png' },
  { id: 8, image: '/portfolio/image9.png' },
  { id: 8, image: '/portfolio/image1.png' },
  { id: 8, image: '/portfolio/image2.png' },
];
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  return (
    <main className=' max-w-7xl mx-auto px bg-secondary overflow-hidden'>
      <Hero />
      <Container id='BollingerBandsChart' className=' flex-col sm:flex-row'>
        <div className=' flex flex-col flex-grow-[1] sm:flex-grow-0 gap-4 bg-secondary p-2 radius'>
          {theIndexData?.map((data, index) => {
            console.log(index);

            return (
              <button
                key={data.id}
                onClick={() => setCurrentIndex(index)}
                className={`flex whitespace-nowrap justify-between gap-4 radius p-2 ${
                  index === currentIndex ? 'bg-blue-500' : ''
                }`}
              >
                <p className=' capitalize'>{data.label}</p>
                <span>{index === currentIndex ? '-' : '+'}</span>
              </button>
            );
          })}
        </div>

        <section className=' flex flex-col gap-5 '>
          <PageTitle title='The WPPOOL Index' className=' hidden sm:flex' />
          <div className=' flex flex-col lg:flex-row gap-4'>
            {indexAmount?.map((data) => (
              <div
                key={data.id}
                className=' flex flex-col lg:flex-row items-center justify-between gap-2 '
              >
                <p
                  style={{ color: data.color }}
                  className='text-2xl font-semibold'
                >
                  +{data.amount}%
                </p>
                <p className=' text-base'>{data.label}</p>
              </div>
            ))}
          </div>
          <BollingerBandsChart />
        </section>
      </Container>

      <Container id='AllCompanies'>
        <div className=' flex justify-between'>
          <PageTitle title='All Companies' />
          <input
            type='text'
            placeholder='Search Compainer'
            className=' bg-secondary px-1 py-2 sm:w-[60%] text-black outline-none'
          />
        </div>
        <AllCompanies />
      </Container>

      <PotentialFeture />

      <Container className=' items-start padding-x'>
        <PageTitle title='State of USD' />
        <button className=' w-[8rem] h-[3rem] flex justify-center items-center text-white font-semibold text-2xl px-4 py-3 rounded-[124px] bg-color'>
          2024
        </button>
        <p className=' text-sm'>
          Click through the slides or download the report to view natively on
          your device.
        </p>

        <CarouselSize />
      </Container>

      <Container className=' bg-transparent padding-x'>
        <PageTitle title='Stories & Ideas' />
        <p className=' text-sm'>The latest news and updates</p>
        <div className=' grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 gap-3'>
          {storyAndIdeas?.map((data) => (
            <Container
              key={data.id}
              className=' rounded-[8px] min-h-[10rem] relative'
            >
              <Image
                src={data.image}
                alt={data.name}
                width={100}
                height={100}
                className=' object-cover absolute -top-12 -left-3'
              />

              <div className=' absolute bottom-2 left-2'>
                <h3 className=' text-blue-600'>{data.name}</h3>
                <p>{data.desc}</p>
                <button className=' p-2 rounded-[16px] capitalize text-white bg-color'>
                  read more
                </button>
              </div>
            </Container>
          ))}
        </div>
      </Container>

      <div className=' h-[1px] w-full bg-color mb-5 opacity-60'></div>

      <section id='AboutWPPOOL' className=' padding-x rounded-[6px]'>
        <Container className=' flex-row rounded-md padding-y'>
          <div className=' flex flex-col justify-between'>
            <PageTitle title='About WPPOOL' />
            <PageTitle
              title='Investing in wppool for over 50 years'
              className=' text-2xl text-gray-400'
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              distinctio aliquid eaque, ipsa recusandae aperiam eveniet illo
              exercitationem earum non eum cupiditate soluta quisquam impedit
              asperiores laudantium rerum. Sequi, fuga?
            </p>
            <button className=' w-auto sm:w-[14rem] h-[2.5rem] whitespace-nowrap flex justify-center items-center text-white font-semibold sm:text-2xl px-4 py-3 rounded-[124px] bg-color'>
              Contact WPPOOL
            </button>
          </div>
          <Image
            src={'/about.png'}
            alt='about wppoool'
            width={300}
            height={300}
          />
        </Container>
      </section>

      <div className=' h-[1px] w-full bg-color mb-5 opacity-60'></div>

      <Container id='WPPOOLPortfolio' className=' padding-x padding-y gap-5'>
        <PageTitle title='Selected WPPOOL Portfolio Companies' />
        <section
          className={cn(
            'grid-class grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'
          )}
        >
          {portfolioData?.map((data) => (
            <div
              key={data.id}
              className=' flex justify-center items-center rounded-[4px] bg-gray-300 w-[12rem] h-[7rem]'
            >
              <Image
                src={`${data.image}`}
                alt='image'
                width={200}
                height={200}
                className=' w-[8rem] bg-white '
              />
            </div>
          ))}
        </section>
      </Container>

      <Footer />
    </main>
  );
};

export default Home;
