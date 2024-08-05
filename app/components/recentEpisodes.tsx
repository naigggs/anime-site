"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function RecentEpisodes() {
  const [recentEpisodes, setRecentEpisodes] = useState<
    { id: string; image: string; title: string; episodeId: string }[]
  >([]);

  useEffect(() => {
    async function fetchtopAiring() {
      const response = await fetch("/api/fetchTopAiring");
      const data = await response.json();
      setRecentEpisodes(data.results);
      console.log(data);
    }

    fetchtopAiring();
  }, []);
  return (
    <div>
      Recent Episodes
      <div>
        {recentEpisodes.map((anime) => (
          <div key={anime.id} className="">
            <Link
              href={{
                pathname: `/watch/${anime.id}`,
                query: {
                  episodeId: anime.episodeId,
                },
              }}
            >
              <img src={anime.image} alt={anime.title} />
            </Link>
            <h2>{anime.title}</h2>
            <p>Episode ID: haha {anime.episodeId}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
