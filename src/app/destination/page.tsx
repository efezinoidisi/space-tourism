import PlanetNav from './components/planet-nav';
import { data } from '@/lib/data';
import Planet from './components/planet';
import Image from 'next/image';
import { Suspense } from 'react';
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
    <main className='flex flex-col'>
      <PageHeading num={1} text={'pick your destination'} />
      <div>
        <Planet
          name={planet.name}
          description={planet.description}
          travel={planet.travel}
          distance={planet.distance}
          image={planet.images.webp}
        />
      </div>
    </main>
  );
}
