import ImageWrapper from '@/components/image';
import { StaticImageData } from 'next/image';

type CardProps = {
  title: string;
  name: string;
  description: string;
  image: StaticImageData;
  nextIndex: (index: number) => void;
  currentIndex: number;
  crewLength: number;
};

export default function Card(props: CardProps) {
  const {
    title,
    name,
    description,
    image,
    nextIndex,
    currentIndex,
    crewLength,
  } = props;

  const items = Array.from({ length: crewLength }, (_, index) => index);

  return (
    <article className='flex flex-col-reverse md:flex-col lg:grid lg:grid-cols-2 gap-10 text-center lg:text-start mt-12 lg:mt-0'>
      <div className='self-center  lg:col-span-1 flex flex-col-reverse md:flex-col gap-5'>
        <div>
          <h3 className='text-foreground opacity-50 md:text-2xl lg:text-[2rem] font-bellefair uppercase pb-2'>
            {title}
          </h3>
          <h4 className='text-foreground uppercase font-bellefair md:text-4xl lg:text-[3.2rem] min-w-fit py-3'>
            {name}
          </h4>
          <p className='lg:text-[1.125rem] lg:leading-8'>{description}</p>
        </div>
        <div className='flex gap-2 justify-center lg:justify-start lg:mt-16'>
          {items.map((_, index) => {
            const active = index === currentIndex;
            return (
              <span
                key={index}
                className={`${
                  active ? 'bg-foreground' : 'bg-gray-400/40'
                } w-3 h-3 rounded-full cursor-pointer`}
                onClick={() => nextIndex(index)}
              ></span>
            );
          })}
        </div>
      </div>
      <div className='border-b flex flex-col justify-center border-[#383B4B] md:border-none'>
        <ImageWrapper
          src={image}
          className='w-56 self-center lg:w-[25rem] col-span-2 lg:col-span-1'
        />
      </div>
    </article>
  );
}
