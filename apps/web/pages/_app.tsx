import "@/styles/modern-css-reset.css";
import "@/styles/globals.css";

import { initFirebase } from "@/utils/init-firebase";
import type { AppProps } from "next/app";
import { Noto_Sans } from "next/font/google";

const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "700"] });

if (typeof window !== "undefined") {
  initFirebase();
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${noto.className} page-wrapper`}>
      <Component {...pageProps} />
    </div>
  );
}
