import styles from "./Footer.module.css";

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.logoContainer}>
        <Image src="/logo.svg" alt="Calendoo" width={18} height={18} />
        Calendoo
      </Link>

      <p>&copy; {new Date().getFullYear()}</p>
    </footer>
  );
};
