import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

interface SliderDataProps {
  id: number;
  image: string;
}
const sliderData: SliderDataProps[] = [
  { id: 1, image: '/slider/image1.png' },
  { id: 2, image: '/slider/image2.png' },
  { id: 3, image: '/slider/image3.png' },
  { id: 4, image: '/slider/image4.png' },
  { id: 5, image: '/slider/image1.png' },
  { id: 6, image: '/slider/image2.png' },
];
export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className='flex flex-col mx-auto w-[80%] h-64 '
    >
      <CarouselContent className='w-full h-full '>
        {sliderData.map((data, index) => (
          <CarouselItem
            key={index}
            className='md:basis-1/2 lg:basis-1/3 h-full '
          >
            <Card className='h-full  border-none'>
              <CardContent className='flex w-full h-full aspect-square items-center justify-center'>
                <Image
                  src={data.image}
                  alt='image'
                  width={1000}
                  height={1000}
                  className=' w-full h-full object-cover  border-none'
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className='flex gap-5 mt-8'>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
