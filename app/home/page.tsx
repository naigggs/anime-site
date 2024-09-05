import Image from "next/image";
import TopAiring from "../components/topAiring";
import RecentEpisodes from "../components/recentEpisodes";

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <div className="mx-auto w-11/12">
        <h1 className="text-center">Top Airing</h1>
        <TopAiring />
        <RecentEpisodes />
      </div>
    </div>
  );
}
