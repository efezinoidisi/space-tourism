import { data } from '@/lib/data';
import Planet from './components/planet';
import PageHeading from '@/components/page-heading';

export default function page({
  searchParams,
}: {
  searchParams: { tab: Planets };
}) {
  const { tab } = searchParams;
  const tabs = {
    Moon: 0,
    Mars: 1,
    Europa: 2,
    Titan: 3,
  };

  const activeTab = tabs[tab] ?? 0;

  const planet = data.destinations[activeTab];

  return (
    <main className='flex flex-col bg-destination-mobile bg-no-repeat bg-cover md:bg-destination-tablet lg:bg-destination-desktop bg-background min-h-screen mix-blend-screen  pb-10 pt-36 px-5 md:pl-10'>
      <PageHeading num={1} text={'pick your destination'} />

      <Planet
        name={planet.name}
        description={planet.description}
        travel={planet.travel}
        distance={planet.distance}
        image={planet.images.webp}
      />
    </main>
  );
}
