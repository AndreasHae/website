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

      <main className="min-h-screen bg-neutral-50 flex flex-col items-center">
        <div className="relative">
          <img src="/headshot.png" alt="Picture of Andreas" />
          <div className="absolute inset-x-0 bottom-0 top-3/4 bg-gradient-to-b from-transparent to-neutral-50"></div>
        </div>
        <div className="-mt-16 z-10 flex flex-col px-6">
          <div className="text-center">
            <h1 className="inline-block text-left text-6xl">
              Hi,
              <br />
              I'm <span className="font-bold">Andreas</span>
            </h1>
          </div>
          <p className="text-2xl mt-4">
            I'm a professional <span className="whitespace-nowrap font-bold">Software Engineer</span> with 3 years of
            experience.
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
