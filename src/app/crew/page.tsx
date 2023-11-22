import PageHeading from '@/components/page-heading';
import Crew from './components/crew';

export default function page() {
  return (
    <main className='flex flex-col pt-10'>
      <PageHeading num={2} text={'meet your crew'} />
      <Crew />
    </main>
  );
}
