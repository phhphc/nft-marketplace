import MyCollectionsContainer from "@Containers/MyCollectionsContainer/MyCollectionsContainer";
import Head from "next/head";

export default function CreateCollectionPage() {
  return (
    <>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <>
          <MyCollectionsContainer />
        </>
      </div>
    </>
  );
}
