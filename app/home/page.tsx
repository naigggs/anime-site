import Image from "next/image";
import RecentEpisodes from "../components/recentEpisodes";

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <div className="mx-auto w-11/12">
        <h1 className="text-center">Recent Episodes</h1>
        <RecentEpisodes />
      </div>
    </div>
  );
}
