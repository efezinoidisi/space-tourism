import PageHeading from "@/components/page-heading";

import Technology from "@/components/technology/technology";
import { data } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space tourism website | Technology",
  description: "The technology page",
};

export default function page({
  searchParams,
}: {
  searchParams: { tab: string };
}) {
  const { tab = "1" } = searchParams;
  const index = +tab;
  const technology = data.technology[index - 1];
  return (
    <main className="flex flex-col bg-technology-mobile bg-no-repeat bg-cover md:bg-technology-tablet lg:bg-technology-desktop bg-background min-h-screen mix-blend-screen md:pb-0 pb-10 pt-36 lg:pl-10">
      <PageHeading num={3} text={"space launch 101"} />
      <div>
        <Technology {...technology} />
      </div>
    </main>
  );
}
