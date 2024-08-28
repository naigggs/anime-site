"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface IEpisodeServer {
  name: string;
  url: string;
}

const WatchEpisode = () => {
  const [servers, setServers] = useState<IEpisodeServer[]>([]);
  const [selectedServer, setSelectedServer] = useState("");
  const searchParams = useSearchParams();
  const episodeId = searchParams.get("episodeId");

  useEffect(() => {
    if (episodeId) {
      fetch(`/api/fetchEpisodeServers?episodeId=${episodeId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            console.error(data.error);
          } else {
            setServers(data);
            if (data.length > 0) {
              setSelectedServer(data[0].url);
            }
          }
        })
        .catch((error) => console.error("Failed to fetch servers:", error));
    } else {
      console.error("Episode ID is missing");
    }
  }, [episodeId]);

  return (
    <div>
      <h1>Video Player</h1>
      <div>
        <label htmlFor="server-select">Choose a server: </label>
        <select
          id="server-select"
          value={selectedServer}
          onChange={(e) => setSelectedServer(e.target.value)}
        >
          {servers.map((server) => (
            <option key={server.url} value={server.url}>
              {server.name}
            </option>
          ))}
        </select>
      </div>
      <div style={{ marginTop: "100px" }}>
        <iframe
          title="video-player"
          src={selectedServer}
          width="800px"
          height="800px"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchEpisode;
