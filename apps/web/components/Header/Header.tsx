import styles from "./Header.module.css";

import { Logo } from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Logo className={styles.logoContainer} />

        <Link href="/sign-in">Sign in</Link>
        <Link href="#" className={styles.cta}>
          Get started
        </Link>
      </nav>
    </header>
  );
};
