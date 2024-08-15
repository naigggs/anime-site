import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <div className="mx-auto w-11/12">
        <h1 className="text-center">Welcome to Anime Site</h1>
        <h1 className="text-center">
          <Link href={"/home"}>Go to Home!</Link>
        </h1>
      </div>
    </div>
  );
}
