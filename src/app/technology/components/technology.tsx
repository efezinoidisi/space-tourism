import TechnologyNav from './tech-navigation';
import TextCard from '@/components/card';
import { Suspense } from 'react';
import ImageWrapper from '@/components/image';
import { StaticImageData } from 'next/image';

type TechnologyProps = {
  name: string;
  images: {
    portrait: StaticImageData;
    landscape: StaticImageData;
  };
  description: string;
};

export default function Technology(props: TechnologyProps) {
  const { name, images, description } = props;
  return (
    <section className='flex flex-col lg:flex-row-reverse gap-10 items-center pt-5 lg:pb-9 lg:gap-20'>
      <>
        <ImageWrapper
          className='hidden lg:block lg:w-2/6'
          src={images.portrait}
        />
        <ImageWrapper className='lg:hidden w-full' src={images.landscape} />
      </>
      <div className='flex justify-between flex-col lg:flex-row gap-10 items-center lg:w-4/6 lg:items-start lg:justify-start '>
        <Suspense fallback={<>loading</>}>
          <TechnologyNav />
        </Suspense>
        <TextCard
          heading='the terminology...'
          subheading={name}
          paragraph={description}
          subheadingStyles='text-foreground uppercase font-bellefair text-2xl md:text-[2.5rem] lg:text-[3.5rem]'
          headingStyles='uppercase tracking-[0.14763rem] font-barlow-condensed text-[0.875rem] md:text-base md:tracking-[0.16875rem]'
          wrapperStyles='flex flex-col justify-center items-center gap-3 px-5 md:px-36 md:gap-5 lg:items-start lg:px-3'
          paragraphStyles='text-center text-[0.9375rem] leading-6 md:leading-7 md:text-base lg:text-left lg:text-lg lg:leading-8 lg:pr-20'
        />
      </div>
      <p className=''></p>
    </section>
  );
}
