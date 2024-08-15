"use client";
import { useSearchParams } from "next/navigation";
import { ANIME } from "@consumet/extensions";

const WatchEpisode = () => {
  const searchParams = useSearchParams();
  const episodeId = searchParams.get("episodeId");
  if (episodeId) {
    const gogoanime = new ANIME.Gogoanime();
    gogoanime.fetchEpisodeSources(episodeId).then((data) => {
      console.log(data);
    });
  } else {
    console.error("Episode ID is missing");
  }
  return (
    <div>
      {/* <h1>{title}</h1> */}
      {/* <img src={image} alt={title} /> */}
      {/* Additional content */}
      {episodeId}
      <video width="320" height="240" controls preload="none">
        <source src="/" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default WatchEpisode;
