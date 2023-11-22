import Image, { StaticImageData } from 'next/image';
import { Suspense } from 'react';
import PlanetNav from './planet-nav';

type PlanetProps = {
  name: string;
  description: string;
  distance: string;
  travel: string;
  image: StaticImageData;
};

export default function Planet(props: PlanetProps) {
  const { name, description, distance, travel, image } = props;
  return (
    <section className='flex flex-col lg:grid lg:grid-cols-2 lg:place-items-center'>
      <div className='w-64 self-center md:w-[32rem]'>
        <Image
          src={image}
          alt=''
          width={500}
          height={500}
          className='object-cover w-full h-full'
        />
      </div>
      <div className='flex flex-col'>
        <Suspense fallback={<p>loading</p>}>
          <PlanetNav />
        </Suspense>
        <div>
          <h3 className='uppercase text-[6.25rem] text-foreground'>{name}</h3>
          <p className='text-lg leading-8'>{description}</p>
        </div>
        <div className='border-t border-[#383B4B] flex gap-14 py-4 mt-4'>
          <p className='flex flex-col uppercase'>
            <span>avg. distance</span>
            <span>{distance}</span>
          </p>

          <p className='flex flex-col uppercase'>
            <span>est. travel travel</span>
            <span>{travel}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
