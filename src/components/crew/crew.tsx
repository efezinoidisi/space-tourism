"use client";
import { data } from "@/lib/data";
import { useLayoutEffect, useState } from "react";
import Card from "./card";

export default function Crew() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  const nextIndex = (index: number) => {
    setCurrentIndex(index);
  };

  // control slide change
  const handleToggle = () => {
    if (!isPaused) {
      const id = setInterval(() => {
        setCurrentIndex((prev) => {
          return prev === data.crew.length - 1 ? 0 : prev + 1;
        });
      }, 5000);
      return () => clearInterval(id);
    }
  };

  useLayoutEffect(handleToggle, [isPaused]);

  const crew = data.crew[currentIndex];

  const updateIsPaused = (value: boolean) => {
    setIsPaused(value);
  };

  return (
    <Card
      title={crew.role}
      name={crew.name}
      image={crew.images.webp}
      description={crew.bio}
      currentIndex={currentIndex}
      crewLength={data.crew.length}
      nextIndex={nextIndex}
      updateIsPaused={updateIsPaused}
    />
  );
}
