import styles from "./Header.module.css";

import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logoContainer}>
          <Image src="/logo.svg" alt="Calendoo" width={18} height={18} />
          Calendoo
        </Link>

        <Link href="#">Sign in</Link>
        <Link href="#">Get started</Link>
      </nav>
    </header>
  );
};
