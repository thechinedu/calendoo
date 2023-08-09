import styles from "./SignIn.module.css";

import Head from "next/head";
import { Logo } from "@/components/Logo";

export const SignIn = () => {
  return (
    <>
      <Head>
        <title>Calendoo - Sign In</title>
        <meta name="description" content="Sign in to Calendoo" />
      </Head>

      <main className={styles.main}>
        <Logo className={styles.logoContainer} />
        <h3 className={styles.heading}>Sign in</h3>
        <p>to continue to Calendoo</p>

        <form className={styles.form}>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>

          <label>
            <span>Password</span>
            <input type="password" />
          </label>

          <button type="submit">Continue</button>
        </form>
      </main>
    </>
  );
};
