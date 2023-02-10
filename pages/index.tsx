import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col">
          <span className="text-3xl">This is Home page</span>
          <span>Click wallet icon to UNLOCK your metamask first</span>
          <Link href={"/collection/collection-name-example"}>
          <span className="bg-red-500">
            Then, click here to move to collection page
          </span>
          </Link>
        </div>
      </main>
    </>
  );
}
