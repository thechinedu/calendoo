import styles from "./Container.module.css";

import { Inter } from "next/font/google";
import { FC, PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`${inter.className} ${styles.container}`}>{children}</div>
  );
};
