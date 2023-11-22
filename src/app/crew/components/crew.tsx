'use client';
import { useState } from 'react';
import { data } from '@/lib/data';
import Card from './card';

export default function Crew() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const crew = data.crew[currentIndex];
  return (
    <Card
      title={crew.role}
      name={crew.name}
      image={crew.images.webp}
      description={crew.bio}
      currentIndex={currentIndex}
      crewLength={data.crew.length}
      nextIndex={nextIndex}
    />
  );
}
