import { NextRequest, NextResponse } from "next/server";
import { ANIME } from "@consumet/extensions";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const animeId = searchParams.get("id");

  if (!animeId) {
    return NextResponse.json({ error: "Anime ID is missing" }, { status: 400 });
  }
  const gogoanime = new ANIME.Gogoanime();

  try {
    const topAiring = await gogoanime.fetchAnimeInfo(animeId);
    return NextResponse.json(topAiring, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch Anime Info" },
      { status: 500 }
    );
  }
}
