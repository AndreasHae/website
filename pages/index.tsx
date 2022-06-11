import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Andreas Haessler</title>
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
