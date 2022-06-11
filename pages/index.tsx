import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Andreas Haessler</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
      </Head>

      <main className="p-6 flex flex-col items-center">
        <h1 className="text-6xl text-left">
          Hi, <span className="whitespace-nowrap">I'm Andreas</span>
        </h1>
      </main>
    </>
  );
};

export default Home;
