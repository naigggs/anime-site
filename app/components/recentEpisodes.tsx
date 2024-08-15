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

export default function RecentEpisodes() {
  const [recentEpisodes, setRecentEpisodes] = useState<
    { id: string; image: string; title: string; episodeId: string }[]
  >([]);

  useEffect(() => {
    async function fetchRecentEpisodes() {
      const response = await fetch("/api/recentEpisodes");
      const data = await response.json();
      setRecentEpisodes(data.results);
      // console.log(data);
    }

    fetchRecentEpisodes();
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {recentEpisodes.map((anime) => (
          <CarouselItem key={anime.id} className="basis-80 ">
            <div className="p-1">
              <div className="relative w-full h-96">
                <Link
                  href={{
                    pathname: `/watch/${anime.episodeId}`,
                    query: {
                      id: anime.id,
                      episodeId: anime.episodeId,
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
