import PageHeading from '@/components/page-heading';
import Crew from './components/crew';

export default function page() {
  return (
    <main className='flex flex-col bg-crew-mobile bg-no-repeat bg-cover md:bg-crew-tablet lg:bg-crew-desktop bg-background min-h-screen mix-blend-screen px-5 md:pl-10 md:pb-0 pb-10 pt-36'>
      <PageHeading num={2} text={'meet your crew'} />
      <Crew />
    </main>
  );
}