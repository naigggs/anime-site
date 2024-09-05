"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ANIME } from "@consumet/extensions";

export default function AnimeInfo() {
  const searchParams = useSearchParams();
  const animeId = searchParams.get("id");

  const [animeInfo, setAnimeInfo] = useState<{ title: string } | undefined>();
  useEffect(() => {
    if (animeId) {
      fetch(`/api/fetchAnimeInfo?id=${animeId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            console.error(data.error);
          } else {
            setAnimeInfo(data);

            console.log(data);
          }
        })
        .catch((error) => console.error("Failed to fetch servers:", error));
    } else {
      console.error("Episode ID is missing");
    }
  }, [animeId]);
  return (
    <div>
      AnimeInfo
      <h1>{animeInfo?.title}</h1>
    </div>
  );
}
