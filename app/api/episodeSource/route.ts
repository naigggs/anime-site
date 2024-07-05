import { NextRequest, NextResponse } from "next/server";
import { ANIME } from "@consumet/extensions";

export async function GET(req: NextRequest) {
  const gogoanime = new ANIME.Gogoanime();

  try {
    const recentEpisodes = await gogoanime.fetchRecentEpisodes();
    return NextResponse.json(recentEpisodes, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch recent episodes" },
      { status: 500 }
    );
  }
}
