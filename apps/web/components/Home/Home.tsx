import { Header } from "@/components/Header";
import Head from "next/head";

export const Home = () => {
  return (
    <>
      <Head>
        <title>Calendoo</title>
        <meta name="description" content="Shareable online calendar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
      </main>
    </>
  );
};
