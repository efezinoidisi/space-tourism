'use client';
import logo from '@/lib/assets/shared/logo.svg';
import hamburger from '@/lib/assets/shared/icon-hamburger.svg';
import closeIcon from '@/lib/assets/shared/icon-close.svg';
import Image from 'next/image';
import Button from '../button';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navigationLinks: {
  id: number;
  name: 'home' | 'destination' | 'crew' | 'technology';
  href: string;
}[] = [
  {
    id: 0,
    name: 'home',
    href: '/',
  },
  {
    id: 1,
    name: 'destination',
    href: '/destination',
  },
  {
    id: 2,
    name: 'crew',
    href: '/crew',
  },
  {
    id: 3,
    name: 'technology',
    href: '/technology',
  },
];

export default function Header() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenu((prev) => !prev);
  };

  return (
    <header className='flex justify-between items-center  absolute top-10 z-10 px-7 md:pl-10 md:pr-0 w-full'>
      <div className='mr-auto col-span-1'>
        <Image
          src={logo}
          alt='logo'
          width={200}
          height={200}
          className='object-cover w-12 h-12'
        />
      </div>
      <Navlinks extraStyles='hidden bg-nav backdrop-blur-sl' />
      <Button onClick={toggleMobileMenu} className='md:hidden'>
        <Image src={hamburger} alt='hamburger icon' className='' />
      </Button>
      {isMobileMenu && <MobileNav toggleMobileMenu={toggleMobileMenu} />}
    </header>
  );
}

const MobileNav = ({ toggleMobileMenu }: { toggleMobileMenu: () => void }) => {
  return (
    <div
      className={
        'fixed right-0 top-0 bottom-0 z-[100] flex flex-col bg-nav backdrop-blur-sl w-4/6 gap-20 pt-10 px-10 md:hidden'
      }
    >
      <Button className='self-end' onClick={toggleMobileMenu}>
        <Image src={closeIcon} alt='close mobile menu icon' className='' />
      </Button>
      <Navlinks
        extraStyles='lg:hidden text-white'
        handleClick={toggleMobileMenu}
      />
    </div>
  );
};

function Navlinks({
  extraStyles = '',
  handleClick = () => {},
}: {
  extraStyles?: string;
  handleClick?: () => void;
}) {
  const pathname = usePathname();
  const nav = navigationLinks.map(({ id, name, href }) => {
    const active = pathname === href;

    return (
      <Link
        key={id}
        href={href}
        className={`flex gap-3 pb-7 items-center ${
          active && 'md:border-b-2 font-barlow-condensed text-foreground'
        } hover:border-white/50 hover:border-b-2 text-foreground/50`}
        onClick={handleClick}
      >
        <span className='font-bold md:hidden lg:inline'>{`0${id}`}</span>
        <span className='uppercase tracking-[0.16875rem] font-barlow-condensed md:tracking-[0.14763rem] md:text-[0.875rem]'>
          {name}
        </span>
      </Link>
    );
  });

  return (
    <nav
      className={`font-barlow-condensed md:flex px-5 gap-10 pt-7  lg:relative lg:before:content-[""] lg:before:absolute lg:before:w-1/4 lg:before:h-[0.0625rem] lg:before:top-1/2 lg:before:-translate-y-1/2 lg:before:bg-foreground lg:before:bg-opacity-[0.02] lg:before:-left-[9.5rem] col-span-2 ${extraStyles}`}
    >
      {nav}
    </nav>
  );
}
