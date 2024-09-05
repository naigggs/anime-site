"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default function TopAiring() {
  const [topAiring, setTopAiring] = useState<
    { id: string; image: string; title: string; episodeId: string }[]
  >([]);

  useEffect(() => {
    async function fetchtopAiring() {
      const response = await fetch("/api/fetchTopAiring");
      const data = await response.json();
      setTopAiring(data.results);
      console.log(data);
    }

    fetchtopAiring();
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {topAiring.map((anime) => (
          <CarouselItem key={anime.id} className="basis-80 ">
            <div className="p-1">
              <div className="relative w-full h-96">
                <Link
                  href={{
                    pathname: `/info/${anime.id}`,
                    query: {
                      id: anime.id,
                    },
                  }}
                >
                  <Image
                    className="object-cover"
                    src={anime.image}
                    fill
                    alt={anime.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
