import { useRouter } from "next/router";
import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Volume() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const foundVolume = volumes[volumeIndex];
  const previous = volumes[volumeIndex - 1];
  const next = volumes[volumeIndex + 1];

  if (!volumes) {
    return null;
  }

  const { title, description, cover, books } = foundVolume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>

      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={ordinal}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      {previous ? (
        <Link href={`/volumes/${previous.slug}`}>← Previous Volume </Link>
      ) : null}
      <Image alt="book cover" src={cover} width={140} height={230}></Image>
      {next ? <Link href={`/volumes/${next.slug}`}>Next Volume →</Link> : null}
    </>
  );
}
