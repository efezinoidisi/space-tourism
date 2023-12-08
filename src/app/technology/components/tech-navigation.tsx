'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
type TechnologyNav = {
  tab: string;
};

export default function TechnologyNav() {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') ?? '1';
  const technologies = Array.from({ length: 3 }, (_, index) => index + 1);

  return (
    <nav className='flex gap-5 self-center lg:flex-col'>
      {technologies.map((tech) => {
        const active = +tab === tech;
        return (
          <Link
            key={tech}
            href={{ pathname: '/technology', query: { tab: tech } }}
            className={`${
              active
                ? 'bg-foreground text-background opacity-100'
                : 'bg-inherit opacity-50'
            } border rounded-full py-3 px-5 transition-colors ease-in-out duration-300 hover:opacity-100`}
          >
            {tech}
          </Link>
        );
      })}
    </nav>
  );
}
