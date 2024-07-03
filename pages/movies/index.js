import Link from "next/link";

export default function Movies() {
  return (
    <>
      <h1>My Favorite Movies</h1>
      <ul>
        <li>
          <Link href="/movies/hulk">Hulk</Link>
        </li>
        <li>
          <Link href="/movies/spiderman">Spiderman</Link>
        </li>
      </ul>
    </>
  );
}
