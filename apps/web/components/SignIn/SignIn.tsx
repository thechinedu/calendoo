import styles from "./SignIn.module.css";

import { Logo } from "@/components/Logo";
import Head from "next/head";
import { ChangeEvent, FC, useState } from "react";

export const SignIn: FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange =
    (formKey: "email" | "password") => (evt: ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [formKey]: evt.target.value,
      });
    };

  return (
    <>
      <Head>
        <title>Calendoo - Sign In</title>
        <meta name="description" content="Sign in to Calendoo" />
      </Head>

      <main className={styles.main}>
        <form className={styles.form}>
          <Logo className={styles.logoContainer} />
          <h3 className={styles.heading}>Sign in</h3>
          <p>to continue to Calendoo</p>
          <label>
            <span
              className={`${styles.labelText}${
                formData.email ? ` ${styles.inputDirty}` : ""
              }`}
            >
              Email
            </span>
            <input
              type="email"
              className={styles.input}
              value={formData.email}
              onChange={handleChange("email")}
            />
          </label>

          <label>
            <span
              className={`${styles.labelText}${
                formData.password ? ` ${styles.inputDirty}` : ""
              }`}
            >
              Password
            </span>
            <input
              type="password"
              className={styles.input}
              value={formData.password}
              onChange={handleChange("password")}
            />
          </label>

          <button type="submit">Continue</button>
        </form>
      </main>
    </>
  );
};
