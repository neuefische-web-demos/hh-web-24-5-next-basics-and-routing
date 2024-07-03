import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(document.body);
  }, []);

  console.log("Home Page");
  return (
    <main>
      <h1>Movies App! (again)</h1>
      <Link href="/movies">go to movie list</Link>
      <Image
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
        alt="cinema"
        width={2000}
        height={1200}
      />
    </main>
  );
}
