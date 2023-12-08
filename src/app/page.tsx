import Link from 'next/link';

export default function Home() {
  return (
    <main className='pt-32 lg:pt-20 pb-10 flex flex-col lg:flex-row justify-between items-center lg:items-end md:px-20 min-h-screen gap-20 w-full px-5 relative bg-home-mobile bg-no-repeat bg-cover md:bg-home-tablet lg:bg-home-desktop bg-background'>
      <div className='lg:basis-1/2 flex flex-col w-full  md:max-w-[27.75rem] items-center lg:items-start'>
        <p className='uppercase md:text-[1.25rem] md:tracking-[0.21094rem] font-barlow-condensed tracking-[0.16875rem]'>
          so you want to travel to
        </p>
        <h2 className='text-foreground uppercase md:text-[9.35rem] font-bellefair text-[5rem]'>
          space
        </h2>
        <p className='lg:text-lg text-center leading-6 text-[0.9375rem] md:leading-7 lg:text-left'>
          {` Let's face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we'll give you a truly out of this world
        experience!`}
        </p>
      </div>
      <div className='lg:basis-1/2 lg:self-end flex justify-center relative w-[19.375rem] h-[19.375rem] md:w-[25.125rem] md:h-[25.125rem] lg:w-[27.125rem] lg:h-[27.125rem]'>
        <Link
          href={'/destination'}
          className='absolute justify-self-end md:rounded-[15.125rem] lg:rounded-[17.125rem] bg-foreground text-background uppercase rounded-[9.375rem]   md:text-[2rem] text-xl peer w-[9.375rem] h-[9.375rem] md:w-[15.125rem] md:h-[15.125rem] lg:w-[17.125rem] lg:h-[17.125rem] left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center'
        >
          explore
        </Link>
        <span
          className='absolute rounded-[28rem]  bg-foreground opacity-[0.1036] invisible inset-0 peer-hover:visible w-[19.375rem] h-[19.375rem] md:w-[25.125rem] md:h-[25.125rem] lg:w-[27.125rem] lg:h-[27.125rem] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 active:visible'
          aria-hidden={true}
        ></span>
      </div>
    </main>
  );
}
