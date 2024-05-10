'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
type PlanetNavProps = {
  tab: string;
};

export default function PlanetNav() {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') ?? 'Moon';
  const planets = [
    {
      name: 'Moon',
      href: '?tab=Moon',
    },
    {
      name: 'Mars',
      href: '?tab=Mars',
    },
    {
      name: 'Europa',
      href: '?tab=Europa',
    },
    {
      name: 'Titan',
      href: '?tab=Titan',
    },
  ];

  return (
    <nav className='flex gap-5 self-center lg:self-start'>
      {planets.map(({ name, href }) => {
        const active = href.includes(tab);
        return (
          <Link
            key={name}
            href={href}
            className={`${
              active ? 'border-b-4 text-foreground' : ''
            } uppercase w-fit transition-colors duration-200 ease-in-out font-barlow-condensed tracking-[0.16875rem] pb-3 hover:border-b-4 hover:border-foreground/50 hover:opacity-50`}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
