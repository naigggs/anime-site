import { NextRequest, NextResponse } from "next/server";
import { ANIME } from "@consumet/extensions";

export async function GET(req: NextRequest) {
  const gogoanime = new ANIME.Gogoanime();

  try {
    const topAiring = await gogoanime.fetchTopAiring();
    return NextResponse.json(topAiring, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch recent episodes" },
      { status: 500 }
    );
  }
}
