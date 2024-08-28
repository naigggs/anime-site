import { NextRequest, NextResponse } from "next/server";
import { ANIME } from "@consumet/extensions";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const episodeId = searchParams.get("episodeId");

  if (!episodeId) {
    return NextResponse.json(
      { error: "Episode ID is missing" },
      { status: 400 }
    );
  }

  const gogoanime = new ANIME.Gogoanime();

  try {
    const episodeServers = await gogoanime.fetchEpisodeServers(episodeId);
    return NextResponse.json(episodeServers, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch servers" },
      { status: 500 }
    );
  }
}
