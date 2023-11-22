import Header from '@/components/header/header';
import { ReactNode } from 'react';

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className='bg-technology-mobile bg-no-repeat bg-cover md:bg-technology-tablet lg:bg-technology-desktop bg-background min-h-screen mix-blend-screen py-10 px-5 md:pl-10'>
      <Header />
      {children}
    </div>
  );
}
