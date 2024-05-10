import ImageWrapper from "@/components/image";
import { StaticImageData } from "next/image";
import { Suspense } from "react";
import PlanetNav from "./planet-nav";

type PlanetProps = {
  name: string;
  description: string;
  distance: string;
  travel: string;
  image: StaticImageData;
};

export default function Planet(props: PlanetProps) {
  const { name, description, distance, travel, image } = props;
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 lg:place-items-center mt-14 lg:mt-2">
      <ImageWrapper
        src={image}
        className="w-64 self-center md:w-[25rem] animate-infinte-rotate perspective-1000 perspective-origin-center"
      />
      <div className="flex flex-col mt-14 gap-5 animate-fade-in">
        <Suspense fallback={<p>loading</p>}>
          <PlanetNav />
        </Suspense>
        <div className="flex flex-col items-center justify-center gap-1 lg:items-start lg:justify-start">
          <h3 className="uppercase font-bellefair text-[3.5rem]  md:text-[5rem] lg:text-[6.25rem] text-foreground ">
            {name}
          </h3>
          <p className="text-[0.93rem] leading-6 lg:text-lg lg:leading-8 text-center px-5 md:leading-7 md:text-base md:px-16 lg:text-left lg:px-0 lg:pr-10">
            {description}
          </p>
        </div>
        <div className="border-t border-[#383B4B] flex flex-col items-center justify-center gap-5 py-4 mt-9 pt-9 md:flex-row md:gap-36  lg:justify-start">
          <p className="flex flex-col uppercase text-center gap-1">
            <span className="text-sm tracking-[0.14763rem] font-barlow-condensed leading-normal">
              avg. distance
            </span>
            <span className="font-bellefair text-foreground text-[1.75rem]">
              {distance}
            </span>
          </p>

          <p className="flex flex-col uppercase text-center">
            <span className="text-sm tracking-[0.14763rem] font-barlow-condensed leading-normal">
              est. travel travel
            </span>
            <span className="font-bellefair text-foreground text-[1.75rem]">
              {travel}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
