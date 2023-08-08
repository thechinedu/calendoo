import styles from "./Home.module.css";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Head from "next/head";
import Link from "next/link";

export const Home = () => {
  return (
    <>
      <Head>
        <title>Calendoo</title>
        <meta name="description" content="Shareable online calendar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.intro}>
          <h2>Shareable online calendar</h2>

          <p>
            Spend less time planning and more time doing with Calendoo, a
            shareable calendar that makes you more productive
          </p>

          <div className={styles.ctas}>
            <Link href="#">Get started</Link>
            <Link href="#">Sign in</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
