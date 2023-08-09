import styles from "./Logo.module.css";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type LogoProps = {
  className?: string;
};

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={`${styles.logoContainer}${className ? ` ${className}` : ""}`}
    >
      <Image src="/logo.svg" alt="Calendoo" width={18} height={18} />
      Calendoo
    </Link>
  );
};
