import React from 'react';
import PageTitle from '../PageTitle';
import Image from 'next/image';

interface LogosProps {
  id: number;
  image: string;
  alt: string;
}
const logos: LogosProps[] = [
  { id: 1, image: '/logos/stripe.png', alt: 'stripe' },
  { id: 2, image: '/logos/klarna.png', alt: 'stripe' },
  { id: 3, image: '/logos/chime.png', alt: 'stripe' },
  { id: 4, image: '/logos/n26.png', alt: 'stripe' },
  { id: 5, image: '/logos/stripe.png', alt: 'stripe' },
  { id: 6, image: '/logos/stripe.png', alt: 'stripe' },
  { id: 7, image: '/logos/klarna.png', alt: 'stripe' },
  { id: 8, image: '/logos/klarna.png', alt: 'stripe' },
];
const PotentialFeture = () => {
  return (
    <section
      id='PotentialFutureListing'
      className=' flex flex-col gap-6 padding-x padding-y'
    >
      <PageTitle title='Potential Future Listing' className=' text-2xl' />
      <p className=' text-sm text-gray-500'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque totam
        alias accusamus? Reprehenderit, minus quae illo sapiente ipsa recusandae
        enim beatae aliquid deleniti. Accusamus voluptates eum, nemo possimus
        doloremque esse.
      </p>

      <div className=' w-full grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 gap-3'>
        {logos?.map((data) => (
          <div
            key={data.id}
            className=' bg-white w-full max-w-[220px] h-[120px] rounded-[6px] flex justify-center items-center'
          >
            <Image
              src={`${data.image}`}
              alt={data.alt}
              width={100}
              height={100}
              className=' object-cover mx-auto mt-3'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PotentialFeture;
